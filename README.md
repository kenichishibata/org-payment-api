
# org-payment-api
An API for school fees org payments


TO PUT

```
localhost:3000/user/kenichi?name=kenichi1&studentNumber=1223453333336&course=compsci&yearLevel=i&address=legazpi&organizationalFee=unpaid&contribution=100&sportsFee=1453&partyFee=1million&specialFee1=special1&specialFee2=spec2
```

To GET all
```
localhost:3000/user (postman)
```

To GET one
```
localhost:3000/user/name (exact match)
```

TO POST
```
localhost:3000/user?name=ken&studentNumber=123456&course=compsci&yearLevel=i&address=legazpi&organizationalFee=unpaid&contribution=100&sportsFee=1453&partyFee=1million&specialFee1=special1&specialFee2=spec2
```
TO DEL
```
localhost:3000/user/name (exact match)
```

TO SEARCH
```
localhost:3000/user/search/partialname
```
