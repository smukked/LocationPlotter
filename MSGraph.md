# Add custom data to users using open extensions
[Use open extensions (example)](https://docs.microsoft.com/en-us/graph/extensibility-open-users)

### Add my location
```
POST https://graph.microsoft.com/v1.0/me/extensions
```
```
{
  "@odata.type": "microsoft.graph.openTypeExtension",
  "extensionName": "com.proactive.locationPlotter",
  "x": 10,
  "y": 35,
  "area": "af2c3f38-f054-43f6-9c8f-4731dc8ce453"
}
```

### Add user location
```
POST https://graph.microsoft.com/v1.0/users/bb44e6c9-1ecb-4885-a3fb-b8cddff040e6/extensions
```
```
{
  "@odata.type": "microsoft.graph.openTypeExtension",
  "extensionName": "com.proactive.locationPlotter",
  "x": 62,
  "y": 13,
  "area": "af2c3f38-f054-43f6-9c8f-4731dc8ce453"
}
```

### Get my location
```
GET https://graph.microsoft.com/v1.0/me?$select=id,displayName,mail,mobilePhone&$expand=extensions
```

### Get users at location
```
GET https://graph.microsoft.com/v1.0/me?$select=id,displayName,mail,mobilePhone&$expand=extensions&$filter = area eq 'af2c3f38-f054-43f6-9c8f-4731dc8ce453'
```

### Update my location
```
PATCH https://graph.microsoft.com/v1.0/me/extensions/com.proactive.locationPlotter
```
```
{
  "x": 45,
  "y": 8,
  "area": "af2c3f38-f054-43f6-9c8f-4731dc8ce453"
}
```

### Delete my location
```
DELETE https://graph.microsoft.com/v1.0/me/extensions/com.proactive.locationPlotter
```
