users
```json
{
    "112233" : {
        "uid": "112233",
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "street": "string",
        "city": "string",
        "poBox": "string",
        "country": "string",
        "isOnline": true,

        // These values are verified by their respective collections
        "isSeller": true,
        "isAdmin": 	false,

        // reference ids
        "pendingListings": {
            "1111111": true,
            "1111112": true
        },

        // This is publicly accessible by any other user
        // This works well with FireBase, but can be refactored 
        // into a profileId reference to a "profile" collection
        // In the future
        {
            "displayName": "sedky",
            "photoUrl": "string",

            // reference ids
            "listings": {
                "1111111": true,
                "5161555": true
            }

        }
    }
}
```

admins
```json
{
    "112233" : true,
    "444555" : true
}
```