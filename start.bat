set s=%1

set u=%2

set p=%3





set usage="Usage start.bat <service_host:port> <ui_host> <port>"

set CHECK_EMPTY=1

if "%s%"=="" set CHECK_EMPTY=0

if "%u%"=="" set CHECK_EMPTY=0

if "%p%"=="" set CHECK_EMPTY=0


if "%CHECK_EMPTY%"=="1" (
  app.bat %s% %u% %p%
  app.bat %s% %u% %p%
) else (
    echo %usage%
)