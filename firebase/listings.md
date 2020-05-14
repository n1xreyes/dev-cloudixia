All Listings start as an entry under pendingListings.  These are not yet copied over to LSI or the “listings” collection.

When they get approved by an admin through the UI (state set to "ACTIVE"), a cloud function moves the item from “pendingListings” to “listings” table, as well as the user's reference ID respectively.  The function also copies the listing to the LSI at this point.

## listings

```json
{
	"123456" : {
		"uid": "123456",
        "title": "string",
		"photoUrl": "string",
		"description": "string",
		"userId": 	"string",
		"price": "string",
        "categories": [
            {
                "id": 5,
                "name": "Cat5"
            },
            {
                "id": 1,
                "name": "Cat1"
            },
        ]
    }
}
```

#### Permissions
Type      | Read | Create | Delete | Update
--------- | --- | --- | --- | --- 
Admin     | Yes | Yes | Yes | Yes
User      | Yes | No | Yes, listings they own |  Yes, listings they own
Seller    | Yes | No | Yes, listings they own |  Yes, listings 
Anonymous | Yes | No | No | No


## pendingListings
```json
{
    "112233" : {
        ...same as listings
        "state": "PENDING" or "ACTIVE"
    }
}
```

#### Permissions
Type      | Read | Create | Delete | Update
--------- | --- | --- | --- | --- 
Admin     | Yes | Yes | Yes | Yes
User      | No | No | No |  No
User      | Their Own | Yes ** | Their Own |  Yes **
Anonymous | No | No | No | No

**  Need to make sure that document's state=“PENDING”, this cannot be changed except by an admin

- Users can modify existing pending listings where the old data is their user id
- Users cannot create new pending listings
- Users can delete listings where the old data is their user id
