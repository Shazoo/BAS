native("filesystem", "writefile", JSON.stringify({path: <%= path %>,value: <%= value %><%= (eol) ? " + \"\\r\\n\"" : "" %>,base64:<%= base64 %>,append:<%= append %>}))