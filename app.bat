
set s=%1

set u=%2

set p=%3





set usage="Usage start.bat <service_host:port> <ui_host> <port>"

set CHECK_EMPTY=1

if "%s%"=="" set CHECK_EMPTY=0

if "%u%"=="" set CHECK_EMPTY=0

if "%p%"=="" set CHECK_EMPTY=0


if "%CHECK_EMPTY%"=="1" (
  set mypath=%cd%
  more +1 "%mypath%\public\app\global.js" > "%mypath%\public\app\global_new.js"
  del "%mypath%\public\app\global.js"
  set javascript=const services_host=http://%s%;const ui_host=http://%u%:%p%
  echo %javascript% > %mypath%\public\app\global.js
  type %mypath%\public\app\global_new.js >> %mypath%\public\app\global.js
  del "%mypath%\public\app\global_new.js"
  echo DONE...!
) else (
    echo %usage%
)