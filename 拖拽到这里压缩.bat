@Echo off
Title ��ק������ѹ��JS
cd %~dp0/lib
cls
color 3f
if "%~1"=="" ECHO ��������ѹ�����ļ������ļ���&pause&exit /b
grunt dragFiles --%~1