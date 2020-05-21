```shell
go build -o app
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o app.exe
```