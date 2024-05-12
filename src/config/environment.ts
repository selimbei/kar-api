import 'dotenv/config'

const CONFIG = {
  db: process.env.DBnew,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhzuvUSdjJ1TBWwQ+gPn1
JdmKarOIz621uWpTHK0yn2MAlQ1aLUHSQMBHVSlZSAigmiUxycI1lCDwk90mvZHn
/gtaW4XcAr7ro4RwEWRcrMXVg0LtvZi2gQqhO9R/zNnwtehOpGEQ+eKA8MtRg2yr
GYrg/s0nbKLYk3GpITTpHOnqFmjN41kQhzl79bGX97GxSvShfYRtsX5WlYtaWmv8
maOl29W14GnxlE9cPpN8sO2160hK8HpGlnWKgIXyzTn7vRzunhT8ZkpmwIRMeoJZ
21X7FKCzKvxQqdmRofkBNUVkNFqQbCt0G8z5sPPkOAh+bzeTUn8uZVc2HLaMat73
gQIDAQAB
-----END PUBLIC KEY-----`,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAhzuvUSdjJ1TBWwQ+gPn1JdmKarOIz621uWpTHK0yn2MAlQ1a
LUHSQMBHVSlZSAigmiUxycI1lCDwk90mvZHn/gtaW4XcAr7ro4RwEWRcrMXVg0Lt
vZi2gQqhO9R/zNnwtehOpGEQ+eKA8MtRg2yrGYrg/s0nbKLYk3GpITTpHOnqFmjN
41kQhzl79bGX97GxSvShfYRtsX5WlYtaWmv8maOl29W14GnxlE9cPpN8sO2160hK
8HpGlnWKgIXyzTn7vRzunhT8ZkpmwIRMeoJZ21X7FKCzKvxQqdmRofkBNUVkNFqQ
bCt0G8z5sPPkOAh+bzeTUn8uZVc2HLaMat73gQIDAQABAoIBAE/JtC+yiHrtM8PK
pkIcuDojttoroT2/JOgHxo+11Jdbpz1KCnmHS1Du4WdqpQWuKWupJE4A6vHB2Y+0
PKY+jt1Bv4ceXGe2U3s/qYtpZpB9jPMMKw7hKlTKe8S8JMctkysQrE2qA4Ub0a3A
mBBtrim82fEcA/XBwvyDZCF2gU+QC3rBQKY3zSaRTOhmgRk5ERWVzDX/XGDTvzIO
Df03Qmzua+DUBGxdmbZTN5iDaphTfzIgaK97KcD/IXMt3y2tuN5ruinEeQkv15nQ
rZu54IhEu7M5aYSKLccmmswfYcS/lZBXtZN56b3QqDZrZkR3Dg4KREPg6Vs8ZhTR
IAbcfJECgYEAx2BTXYuxJzquoynhv+oqcZOWIFJZ1KDyYKevY0v/WE64Olq5xE4P
BrcNAmdTq4UBRoDrkmhJAl5+fsd26m88lkiTaOHTt5s69nXmmWqZLyVfxV7TUz5f
CuCEzV5c0njSNkD+0XAc4V2ocCFJC7rbn+4PpCLX45sxKZLOQOxGerUCgYEAraPT
aJmKnNJV85QdzHEq8SbLkU3w1/j/Dbfn8rfReEHvuYAXG+GyV6X9mKBFfzJU7No7
z5enEoywpUlR9wR3XwhCabatGastGAcH3yqHduZqmcm1scTTi+PgmEIxLIs5ImQ3
74GIQk3Jtx+3DK/apOJv/BGlyac59jS0gmSUbR0CgYEAkYFONgYd6shb7X5CYAJw
qWURelM/dftkCIA4ctpi5zrEHupZiteBBeCP4QIxwQqXjLHHupjbN5xo6vN9aMh3
yiH7Wt782ZGzbW1MNwjh9NNs2qlCxwzM5i5HHW5RhdVhbPDwRz9wBFWK+RKBscrU
QBrIVXyMXHLFZVbbqewF38UCgYBNAp2ehIpvZvHr58MXixFqhrQ+K30nrC0iXnAm
u9PRLB0v/llBamX4bYv9hweLlD0KFvfz5+SXW4J0rAIINhjjMvyReg1nlv2W7HdX
SLtvxl18+3Lz9sGEB3ryzFiW0uByGlSciqxuC6Xs68n5fHzSKANWnlUTDHGuek2c
jxMtGQKBgQCvVQB6O/bFr3y1Te+CTJq1jxhmFqUMAisF++aisGvL2Poip4AKyFsY
ZJBxLSiCvcmegybEwGKQmHNw8OuVkEjx0tRDuRlXMbk7+5mpHG9sSVlzwhvK1x/N
VxCulIQ8dUsibRAEi9Hl4EuOEstzY1KqICE/RBvNBrc0Jf0Z8IHz6g==
-----END RSA PRIVATE KEY-----`
}

export default CONFIG
