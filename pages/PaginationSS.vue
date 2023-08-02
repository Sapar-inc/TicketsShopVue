<template>
    <div>
    
    <p>{{ RenderDiv }}</p>
    
    </div>
</template>

<script>
export default { 
    data() {
        return {
            data: 
                [{
                        "_id": "64bae421248948d975b871e4",
                        "index": 0,
                        "guid": "3c595814-d818-41c7-bd61-6fb16e46393a",
                        "isActive": false,
                        "balance": "$3,965.30",
                        "picture": "http://placehold.it/32x32",
                        "age": 22,
                        "eyeColor": "green",
                        "name": "Daniel Christian",
                        "gender": "male",
                        "company": "ZOLAVO",
                        "email": "danielchristian@zolavo.com",
                        "phone": "+1 (881) 466-3508",
                        "address": "137 Remsen Avenue, Harborton, American Samoa, 1926",
                        "about": "Mollit sint aliquip et sit excepteur eu fugiat do nostrud do tempor. Et dolore deserunt consectetur voluptate do. Cillum ullamco duis pariatur sint et do proident ex consequat irure officia magna minim.\r\n",
                        "registered": "2014-06-26T11:24:38 -06:00",
                        "latitude": 53.194779,
                        "longitude": 94.832612,
                        "tags": [
                            "cupidatat",
                            "excepteur",
                            "ad",
                            "laboris",
                            "eu",
                            "exercitation",
                            "amet"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Bell Flowers"
                            },
                            {
                                "id": 1,
                                "name": "Jo Valenzuela"
                            },
                            {
                                "id": 2,
                                "name": "Merle Jimenez"
                            }
                        ],
                        "greeting": "Hello, Daniel Christian! You have 8 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "_id": "64bae421f2e33e401116d4b6",
                        "index": 1,
                        "guid": "c5a378e6-f2b8-4d44-838d-aee0b8c04dcf",
                        "isActive": true,
                        "balance": "$1,719.02",
                        "picture": "http://placehold.it/32x32",
                        "age": 39,
                        "eyeColor": "green",
                        "name": "Carroll Nash",
                        "gender": "male",
                        "company": "PORTALIS",
                        "email": "carrollnash@portalis.com",
                        "phone": "+1 (811) 546-3750",
                        "address": "912 Coffey Street, Allentown, District Of Columbia, 2429",
                        "about": "Et exercitation id laborum excepteur id. Dolore veniam ullamco voluptate est ea nulla quis dolore in culpa proident nisi elit labore. Duis culpa adipisicing veniam minim dolor ipsum velit sint in. Ex aliqua tempor et nostrud reprehenderit dolor in. Deserunt ex tempor eu velit tempor cupidatat ea deserunt.\r\n",
                        "registered": "2021-08-18T11:26:12 -06:00",
                        "latitude": -24.787182,
                        "longitude": -87.100519,
                        "tags": [
                            "minim",
                            "cillum",
                            "magna",
                            "sit",
                            "Lorem",
                            "sit",
                            "eu"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Meagan Wooten"
                            },
                            {
                                "id": 1,
                                "name": "Riddle Howard"
                            },
                            {
                                "id": 2,
                                "name": "Anthony Yates"
                            }
                        ],
                        "greeting": "Hello, Carroll Nash! You have 8 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "_id": "64bae42199678518754dbb82",
                        "index": 2,
                        "guid": "12aa2b94-ab40-466d-a7ed-38a91e60a954",
                        "isActive": false,
                        "balance": "$1,710.49",
                        "picture": "http://placehold.it/32x32",
                        "age": 34,
                        "eyeColor": "brown",
                        "name": "Wilson Quinn",
                        "gender": "male",
                        "company": "CEMENTION",
                        "email": "wilsonquinn@cemention.com",
                        "phone": "+1 (807) 553-2459",
                        "address": "706 Narrows Avenue, Detroit, Wisconsin, 6586",
                        "about": "Ipsum aute occaecat dolore laborum reprehenderit pariatur esse id duis. Officia nulla nulla occaecat deserunt commodo nisi cillum. Exercitation consequat consequat minim ut commodo qui incididunt exercitation laboris. Adipisicing ad voluptate pariatur culpa adipisicing eiusmod laborum eu qui sint nostrud et exercitation. Duis exercitation in irure consectetur fugiat labore consequat sint est do anim dolore culpa officia. Pariatur proident ea anim amet eiusmod id aliquip aliquip quis.\r\n",
                        "registered": "2022-04-03T03:25:48 -06:00",
                        "latitude": 56.811887,
                        "longitude": -136.975091,
                        "tags": [
                            "dolor",
                            "elit",
                            "dolore",
                            "pariatur",
                            "consequat",
                            "consectetur",
                            "quis"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Gail Marsh"
                            },
                            {
                                "id": 1,
                                "name": "Imelda Patel"
                            },
                            {
                                "id": 2,
                                "name": "Martina Hunter"
                            }
                        ],
                        "greeting": "Hello, Wilson Quinn! You have 2 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "_id": "64bae421c446c565227eca9c",
                        "index": 3,
                        "guid": "7b9666ad-0a21-4476-9f50-0dc5eff250a0",
                        "isActive": false,
                        "balance": "$1,162.68",
                        "picture": "http://placehold.it/32x32",
                        "age": 39,
                        "eyeColor": "green",
                        "name": "Kellie Sanders",
                        "gender": "female",
                        "company": "ECOLIGHT",
                        "email": "kelliesanders@ecolight.com",
                        "phone": "+1 (972) 449-2567",
                        "address": "869 Elizabeth Place, Bangor, Louisiana, 1865",
                        "about": "Laborum magna consectetur eiusmod sint consequat dolor amet adipisicing deserunt. Irure excepteur cupidatat fugiat aliqua in. Aliqua aliqua officia duis velit voluptate reprehenderit ex adipisicing consequat cupidatat cupidatat ea est. Aliquip consectetur ea velit est velit quis adipisicing. Minim dolor minim dolor officia cupidatat laboris consectetur. Lorem magna culpa voluptate aliquip consequat. Labore non nulla nulla adipisicing non amet.\r\n",
                        "registered": "2017-02-09T07:51:45 -06:00",
                        "latitude": 62.727977,
                        "longitude": -61.079313,
                        "tags": [
                            "velit",
                            "reprehenderit",
                            "labore",
                            "exercitation",
                            "dolore",
                            "sit",
                            "cillum"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "George Rocha"
                            },
                            {
                                "id": 1,
                                "name": "Lottie Mccall"
                            },
                            {
                                "id": 2,
                                "name": "Bertie Dalton"
                            }
                        ],
                        "greeting": "Hello, Kellie Sanders! You have 6 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "_id": "64bae4212a6ce49209d6aa32",
                        "index": 4,
                        "guid": "fdca1aa6-955e-4daa-b19d-f4dfac6a6b7e",
                        "isActive": false,
                        "balance": "$1,739.43",
                        "picture": "http://placehold.it/32x32",
                        "age": 27,
                        "eyeColor": "brown",
                        "name": "Avery Cochran",
                        "gender": "male",
                        "company": "HINWAY",
                        "email": "averycochran@hinway.com",
                        "phone": "+1 (996) 585-2608",
                        "address": "202 Times Placez, Kingstowne, Hawaii, 4733",
                        "about": "Veniam est esse labore veniam labore sint velit enim. Nulla ea sint consectetur consequat laborum aliquip do aute. Deserunt aliqua id labore nulla Lorem dolore nostrud adipisicing laborum. Proident nisi nulla ut ipsum.\r\n",
                        "registered": "2022-11-07T05:28:56 -06:00",
                        "latitude": -24.79925,
                        "longitude": -143.783886,
                        "tags": [
                            "quis",
                            "labore",
                            "Lorem",
                            "culpa",
                            "pariatur",
                            "fugiat",
                            "sit"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Melton Bennett"
                            },
                            {
                                "id": 1,
                                "name": "French Hickman"
                            },
                            {
                                "id": 2,
                                "name": "Tamara Jennings"
                            }
                        ],
                        "greeting": "Hello, Avery Cochran! You have 9 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "_id": "64bae421c47e837d81709532",
                        "index": 5,
                        "guid": "d2c23cf8-2590-4377-bba3-a480bd0c7714",
                        "isActive": false,
                        "balance": "$1,513.27",
                        "picture": "http://placehold.it/32x32",
                        "age": 22,
                        "eyeColor": "brown",
                        "name": "Letitia Cantu",
                        "gender": "female",
                        "company": "QUAILCOM",
                        "email": "letitiacantu@quailcom.com",
                        "phone": "+1 (834) 567-3531",
                        "address": "606 Clarendon Road, Magnolia, Marshall Islands, 1905",
                        "about": "Consequat ut tempor irure culpa eu ipsum amet. Aliqua aliqua proident commodo tempor nostrud est sunt. Fugiat fugiat occaecat ex et tempor nostrud laboris aliquip. Esse nulla quis incididunt eu proident. Dolor cupidatat esse tempor magna deserunt cillum nulla excepteur voluptate voluptate enim occaecat voluptate.\r\n",
                        "registered": "2022-03-01T04:40:03 -06:00",
                        "latitude": 15.836421,
                        "longitude": -122.249492,
                        "tags": [
                            "sunt",
                            "laboris",
                            "laborum",
                            "reprehenderit",
                            "exercitation",
                            "minim",
                            "aute"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Brianna Chase"
                            },
                            {
                                "id": 1,
                                "name": "Ross Contreras"
                            },
                            {
                                "id": 2,
                                "name": "Eugenia Hanson"
                            }
                        ],
                        "greeting": "Hello, Letitia Cantu! You have 1 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "_id": "64bae421beead484a14cb3b6",
                        "index": 6,
                        "guid": "2c692df1-7111-462b-a276-a503eea716d6",
                        "isActive": true,
                        "balance": "$3,298.64",
                        "picture": "http://placehold.it/32x32",
                        "age": 30,
                        "eyeColor": "brown",
                        "name": "Lakeisha Vincent",
                        "gender": "female",
                        "company": "RETROTEX",
                        "email": "lakeishavincent@retrotex.com",
                        "phone": "+1 (874) 464-2442",
                        "address": "829 President Street, Caroleen, Federated States Of Micronesia, 7014",
                        "about": "Sit officia cupidatat fugiat pariatur non commodo consequat officia ex nostrud ipsum. Anim velit commodo commodo reprehenderit pariatur quis fugiat irure anim nulla commodo quis duis. Adipisicing et nulla ut velit. Cillum ex officia eu nostrud consequat reprehenderit elit et ea eiusmod amet irure ea exercitation. Culpa ea ex esse elit pariatur minim amet irure sit et id ipsum. Duis occaecat ipsum minim quis qui magna aliquip voluptate tempor minim proident reprehenderit esse.\r\n",
                        "registered": "2022-07-28T01:46:29 -06:00",
                        "latitude": -9.058812,
                        "longitude": -167.839998,
                        "tags": [
                            "occaecat",
                            "pariatur",
                            "minim",
                            "ex",
                            "nulla",
                            "consequat",
                            "sint"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Mai Dunlap"
                            },
                            {
                                "id": 1,
                                "name": "Jenna Burke"
                            },
                            {
                                "id": 2,
                                "name": "Leta Carson"
                            }
                        ],
                        "greeting": "Hello, Lakeisha Vincent! You have 8 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "_id": "64bae421c3b445cd3ef8bee7",
                        "index": 7,
                        "guid": "9529fbf2-3aec-4c1e-90f5-e05c46aff0a0",
                        "isActive": false,
                        "balance": "$1,064.09",
                        "picture": "http://placehold.it/32x32",
                        "age": 35,
                        "eyeColor": "brown",
                        "name": "Lamb Wolfe",
                        "gender": "male",
                        "company": "AMTAS",
                        "email": "lambwolfe@amtas.com",
                        "phone": "+1 (884) 465-2138",
                        "address": "142 Tompkins Avenue, Carbonville, Missouri, 988",
                        "about": "Qui veniam do dolore culpa nostrud ad velit id. Cupidatat ad excepteur adipisicing enim excepteur ad Lorem laborum do. Laboris nulla enim ad excepteur sit dolor. Sunt in non dolore irure reprehenderit excepteur nostrud pariatur consectetur et dolore voluptate sunt laborum.\r\n",
                        "registered": "2016-05-07T06:13:35 -06:00",
                        "latitude": -38.193822,
                        "longitude": -44.097702,
                        "tags": [
                            "occaecat",
                            "aliqua",
                            "adipisicing",
                            "consequat",
                            "do",
                            "ea",
                            "sint"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Crane Deleon"
                            },
                            {
                                "id": 1,
                                "name": "Gilbert Gamble"
                            },
                            {
                                "id": 2,
                                "name": "Aileen Carpenter"
                            }
                        ],
                        "greeting": "Hello, Lamb Wolfe! You have 5 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "_id": "64bae42147cf71c567ea3ca6",
                        "index": 8,
                        "guid": "be31dee2-1ad8-4bcf-ac36-ce09cea617c3",
                        "isActive": false,
                        "balance": "$3,214.61",
                        "picture": "http://placehold.it/32x32",
                        "age": 25,
                        "eyeColor": "brown",
                        "name": "Ann Curry",
                        "gender": "female",
                        "company": "BITTOR",
                        "email": "anncurry@bittor.com",
                        "phone": "+1 (994) 433-2904",
                        "address": "568 Voorhies Avenue, Gilmore, Guam, 9000",
                        "about": "Reprehenderit enim dolor minim nulla reprehenderit qui nisi eiusmod exercitation aliqua esse aute qui. Excepteur qui magna nulla minim. Id occaecat eiusmod velit est deserunt ullamco qui ex. Magna nisi reprehenderit proident minim esse voluptate.\r\n",
                        "registered": "2019-07-30T12:54:55 -06:00",
                        "latitude": 72.852092,
                        "longitude": -38.468711,
                        "tags": [
                            "est",
                            "dolore",
                            "consequat",
                            "id",
                            "minim",
                            "sint",
                            "in"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Villarreal Foley"
                            },
                            {
                                "id": 1,
                                "name": "Lorene Thomas"
                            },
                            {
                                "id": 2,
                                "name": "Burns Dejesus"
                            }
                        ],
                        "greeting": "Hello, Ann Curry! You have 7 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "_id": "64bae4214f2bf24bffd6d795",
                        "index": 9,
                        "guid": "ef760077-4a4c-4242-8599-3e0bdfc89992",
                        "isActive": false,
                        "balance": "$1,562.49",
                        "picture": "http://placehold.it/32x32",
                        "age": 36,
                        "eyeColor": "green",
                        "name": "Rosalie Guerra",
                        "gender": "female",
                        "company": "PARCOE",
                        "email": "rosalieguerra@parcoe.com",
                        "phone": "+1 (993) 568-2126",
                        "address": "420 Vine Street, Torboy, New York, 2374",
                        "about": "Aliquip ipsum velit fugiat amet nisi adipisicing elit adipisicing culpa amet ullamco deserunt sint dolor. Dolore et eu ut cupidatat eu nostrud duis dolor enim proident do nulla. Anim officia adipisicing sit deserunt ea ex reprehenderit. Esse in eiusmod quis nisi labore. Cupidatat anim eiusmod id reprehenderit ullamco consequat excepteur id deserunt cillum. Exercitation eu reprehenderit occaecat consectetur commodo aliquip aliqua consectetur nulla reprehenderit occaecat proident occaecat mollit. Esse aliqua esse pariatur aliquip aute qui dolore.\r\n",
                        "registered": "2015-01-22T10:32:11 -06:00",
                        "latitude": -75.846214,
                        "longitude": -157.705007,
                        "tags": [
                            "voluptate",
                            "incididunt",
                            "minim",
                            "occaecat",
                            "dolor",
                            "nulla",
                            "esse"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Dena Montgomery"
                            },
                            {
                                "id": 1,
                                "name": "Carey Durham"
                            },
                            {
                                "id": 2,
                                "name": "Wooten Pruitt"
                            }
                        ],
                        "greeting": "Hello, Rosalie Guerra! You have 7 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "_id": "64bae4213b6bb037ab4f8c1d",
                        "index": 10,
                        "guid": "a2de7f9a-08fc-4531-83c3-a23abec981ee",
                        "isActive": true,
                        "balance": "$2,450.49",
                        "picture": "http://placehold.it/32x32",
                        "age": 31,
                        "eyeColor": "green",
                        "name": "Cassie Barron",
                        "gender": "female",
                        "company": "ORBOID",
                        "email": "cassiebarron@orboid.com",
                        "phone": "+1 (905) 410-2063",
                        "address": "284 Hewes Street, Dola, Utah, 1789",
                        "about": "Labore duis ut sint ut voluptate. Voluptate dolore amet ea nostrud eiusmod eiusmod eiusmod labore magna. Cillum aliqua pariatur eiusmod est Lorem elit irure esse Lorem qui ad. Anim exercitation elit nulla do veniam occaecat nisi elit exercitation nostrud cupidatat. Ex reprehenderit occaecat irure enim ullamco ad do voluptate. Ullamco magna dolor do anim cillum ad nulla qui elit cillum consequat. Occaecat incididunt in et commodo non id dolor duis.\r\n",
                        "registered": "2019-01-14T03:44:55 -06:00",
                        "latitude": 66.431668,
                        "longitude": 10.949372,
                        "tags": [
                            "aute",
                            "labore",
                            "ullamco",
                            "consectetur",
                            "et",
                            "officia",
                            "sunt"
                        ],
                        "friends": [{
                                "id": 0,
                                "name": "Parker Moody"
                            },
                            {
                                "id": 1,
                                "name": "Brandi Stokes"
                            },
                            {
                                "id": 2,
                                "name": "Middleton Franco"
                            }
                        ],
                        "greeting": "Hello, Cassie Barron! You have 4 unread messages.",
                        "favoriteFruit": "banana"
                    }
                ]
            
        }
    },
    computed: {
         RenderDiv(){
            for (let i = 0; i < this.data.lenght; i++){
                
            }
             console.log(this.data.length)
             return this.data
        }
    },
}
</script>

<style lang="scss" scoped>

</style>