@echo off
echo.
echo ========================================
echo   Starting Paros Rent A Car Dev Server
echo ========================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting backend and frontend servers...
echo Backend: http://localhost:3001
echo Frontend: http://localhost:8080
echo.
call npm run dev:all
