# 生成私钥
openssl genpkey -algorithm RSA -out server-key.pem

# 生成CSR并添加Subject Alternative Name (SAN)
openssl req -new -key server-key.pem -out server-csr.pem \
  -subj "/CN=192.168.43.51" \
  -addext "subjectAltName = IP:192.168.43.51"

# 签名证书
openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem


# 生成私钥
openssl genpkey -algorithm RSA -out client-key.pem

# 生成CSR并添加Subject Alternative Name (SAN)
openssl req -new -key client-key.pem -out client-csr.pem \
  -subj "/CN=192.168.43.51" \
  -addext "subjectAltName = IP:192.168.43.51"

# 签名证书
openssl x509 -req -in client-csr.pem -signkey client-key.pem -out client-cert.pem
