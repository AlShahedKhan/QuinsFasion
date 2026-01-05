# PostgreSQL Password Reset Script
# Run this script as Administrator
# This script will temporarily enable trust authentication, reset the root user password, then restore security

Write-Host "PostgreSQL Password Reset Script" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

$pgDataPath = "C:\Program Files\PostgreSQL\18\data"
$pgHbaPath = Join-Path $pgDataPath "pg_hba.conf"
$pgHbaBackup = Join-Path $pgDataPath "pg_hba.conf.backup"

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "ERROR: This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "Right-click PowerShell and select 'Run as Administrator', then run this script again." -ForegroundColor Yellow
    exit 1
}

# Backup pg_hba.conf
Write-Host "`n1. Backing up pg_hba.conf..." -ForegroundColor Cyan
Copy-Item $pgHbaPath $pgHbaBackup -Force
Write-Host "   Backup created: $pgHbaBackup" -ForegroundColor Green

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
$newContent | Set-Content $pgHbaPath -Encoding UTF8
Write-Host "   pg_hba.conf modified successfully" -ForegroundColor Green

# Restart PostgreSQL service
Write-Host "`n3. Restarting PostgreSQL service..." -ForegroundColor Cyan
$serviceName = (Get-Service | Where-Object { $_.DisplayName -like "*PostgreSQL*" } | Select-Object -First 1).Name
if ($serviceName) {
    Write-Host "   Found service: $serviceName" -ForegroundColor Yellow
    Restart-Service -Name $serviceName -Force
    Start-Sleep -Seconds 3
    Write-Host "   PostgreSQL service restarted" -ForegroundColor Green
} else {
    Write-Host "   WARNING: Could not find PostgreSQL service!" -ForegroundColor Red
    Write-Host "   You may need to restart it manually" -ForegroundColor Yellow
}

# Reset password
Write-Host "`n4. Connecting to PostgreSQL and resetting root user password..." -ForegroundColor Cyan
$psqlPath = "C:\Program Files\PostgreSQL\18\bin\psql.exe"

# SQL command to create or alter root user with password 'root'
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

& $psqlPath -U postgres -d postgres -c $sqlCommand
if ($LASTEXITCODE -eq 0) {
    Write-Host "   Password reset successfully!" -ForegroundColor Green
} else {
    Write-Host "   ERROR: Failed to reset password. Exit code: $LASTEXITCODE" -ForegroundColor Red
}

# Restore original pg_hba.conf
Write-Host "`n5. Restoring original pg_hba.conf..." -ForegroundColor Cyan
Copy-Item $pgHbaBackup $pgHbaPath -Force
Write-Host "   Original configuration restored" -ForegroundColor Green

# Restart PostgreSQL service again
Write-Host "`n6. Restarting PostgreSQL service with secure authentication..." -ForegroundColor Cyan
if ($serviceName) {
    Restart-Service -Name $serviceName -Force
    Start-Sleep -Seconds 3
    Write-Host "   PostgreSQL service restarted" -ForegroundColor Green
}

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "Password reset completed!" -ForegroundColor Green
Write-Host "Username: root" -ForegroundColor Cyan
Write-Host "Password: root" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Green

