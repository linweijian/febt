@Echo off
Title 拖拽到这里压缩JS
cd %~dp0/lib
cls
color 3f
if "%~1"=="" ECHO 请拖入需压缩的文件到本文件上&pause&exit /b
grunt dragFiles --%~1