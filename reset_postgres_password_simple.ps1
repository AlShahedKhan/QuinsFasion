# PostgreSQL Password Reset Script (Simple Version)
# Attempts to reset password using configuration reload instead of service restart

Write-Host "PostgreSQL Password Reset Script" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

$pgDataPath = "C:\Program Files\PostgreSQL\18\data"
$pgHbaPath = Join-Path $pgDataPath "pg_hba.conf"
$pgHbaBackup = Join-Path $pgDataPath "pg_hba.conf.backup"
$psqlPath = "C:\Program Files\PostgreSQL\18\bin\psql.exe"

# Backup pg_hba.conf
Write-Host "`n1. Backing up pg_hba.conf..." -ForegroundColor Cyan
try {
    Copy-Item $pgHbaPath $pgHbaBackup -Force -ErrorAction Stop
    Write-Host "   Backup created: $pgHbaBackup" -ForegroundColor Green
} catch {
    Write-Host "   ERROR: Cannot backup pg_hba.conf. Admin privileges may be required." -ForegroundColor Red
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Read current pg_hba.conf
$pgHbaContent = Get-Content $pgHbaPath

# Modify to use trust authentication for localhost connections
Write-Host "`n2. Modifying pg_hba.conf for temporary trust authentication..." -ForegroundColor Cyan
$newContent = @()
foreach ($line in $pgHbaContent) {
    if ($line -match "^\s*(host|local)\s+all\s+all") {
        # Change scram-sha-256 to trust for local connections
        $newLine = $line -replace "scram-sha-256", "trust"
        $newContent += $newLine
        Write-Host "   Modified: $line" -ForegroundColor Yellow
        Write-Host "   To:       $newLine" -ForegroundColor Yellow
    } else {
        $newContent += $line
    }
}

# Write modified content
try {
    $newContent | Set-Content $pgHbaPath -Encoding UTF8 -ErrorAction Stop
    Write-Host "   pg_hba.conf modified successfully" -ForegroundColor Green
} catch {
    Write-Host "   ERROR: Cannot modify pg_hba.conf. Admin privileges required." -ForegroundColor Red
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Reload PostgreSQL configuration using SQL
Write-Host "`n3. Reloading PostgreSQL configuration..." -ForegroundColor Cyan
# First try to connect with postgres user using trust (might work after reload)
Start-Sleep -Seconds 2
& $psqlPath -U postgres -d postgres -c "SELECT pg_reload_conf();" 2>&1 | Out-Null
Start-Sleep -Seconds 2
Write-Host "   Configuration reload attempted" -ForegroundColor Yellow

# Reset password
Write-Host "`n4. Connecting to PostgreSQL and resetting root user password..." -ForegroundColor Cyan
$sqlCommand = @"
DO `$`$ 
BEGIN 
    IF EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'root') THEN 
        ALTER USER root WITH PASSWORD 'root'; 
        RAISE NOTICE 'Password updated for user root';
    ELSE 
        CREATE USER root WITH PASSWORD 'root' SUPERUSER; 
        RAISE NOTICE 'User root created with password root';
    END IF; 
END 
`$`$;
"@

$result = & $psqlPath -U postgres -d postgres -c $sqlCommand 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "   Password reset successfully!" -ForegroundColor Green
    Write-Host $result
} else {
    Write-Host "   Attempting connection without password..." -ForegroundColor Yellow
    $result = & $psqlPath -U postgres -d postgres -c $sqlCommand 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   Password reset successfully!" -ForegroundColor Green
        Write-Host $result
    } else {
        Write-Host "   ERROR: Failed to reset password." -ForegroundColor Red
        Write-Host $result
        Write-Host "`n   Trying to restore pg_hba.conf..." -ForegroundColor Yellow
        Copy-Item $pgHbaBackup $pgHbaPath -Force
        exit 1
    }
}

# Restore original pg_hba.conf
Write-Host "`n5. Restoring original pg_hba.conf..." -ForegroundColor Cyan
try {
    Copy-Item $pgHbaBackup $pgHbaPath -Force -ErrorAction Stop
    Write-Host "   Original configuration restored" -ForegroundColor Green
} catch {
    Write-Host "   ERROR: Cannot restore pg_hba.conf!" -ForegroundColor Red
    Write-Host "   Please manually restore from: $pgHbaBackup" -ForegroundColor Yellow
}

# Reload configuration again
Write-Host "`n6. Reloading PostgreSQL configuration with secure authentication..." -ForegroundColor Cyan
& $psqlPath -U postgres -d postgres -c "SELECT pg_reload_conf();" 2>&1 | Out-Null
Start-Sleep -Seconds 2

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "Password reset completed!" -ForegroundColor Green
Write-Host "Username: root" -ForegroundColor Cyan
Write-Host "Password: root" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Green


