@echo off
echo ========================================
echo PostgreSQL Password Reset - Run as Admin
echo ========================================
echo.
echo This script will reset the PostgreSQL root user password to "root"
echo.
echo IMPORTANT: Right-click this file and select "Run as administrator"
echo.
pause
powershell -ExecutionPolicy Bypass -File "%~dp0reset_postgres_password.ps1"
pause



