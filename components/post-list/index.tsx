import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { Card } from "@rneui/base"
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { Post } from "../../models/post-model"
import { CustomAvatar } from "../custom-avatar"
import { PostCard } from "../post-card"

interface Props {
  posts: Post[]
}

export const PostList = () => {
  const posts: Post[] = [
    {
      "_id": "62e98c58c1d53eb0f26a1feb",
      "title": "testes ṕst",
      "description": "testando eventos",
      "profileId": {
        "_id": "62e137614659c8aa4e84c648",
        "username": "Amanda",
        "posts": [
          "62e3e9d1e223d5326bdceaa1",
          "62e43abdaeae3ea079291885",
          "62e98c58c1d53eb0f26a1feb"
        ],
        "followers": [
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e9807d37109815b277cd6d",
          "62e137614659c8aa4e84c644"
        ],
        "following": [
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e137614659c8aa4e84c644"
        ]
      },
      "comments": [
        "62e9a46f65eb7b76d4fb87c7",
        "62eec3caf2d199709f1e0dd2",
        "62eec3cbf2d199709f1e0dda",
        "62eec3cef2d199709f1e0de2",
        "62eec3def2d199709f1e0df0"
      ],
      "likes": [
        "62e137614659c8aa4e84c644"
      ],
      "hasImage": false,
      "imageUrl": "none",
    },
    {
      "_id": "62e43abdaeae3ea079291885",
      "title": "sdfsdfsdfsf",
      "description": "efsdfsdfsdf",
      "profileId": {
        "_id": "62e137614659c8aa4e84c648",
        "username": "Amanda",
        "posts": [
          "62e3e9d1e223d5326bdceaa1",
          "62e43abdaeae3ea079291885",
          "62e98c58c1d53eb0f26a1feb"
        ],
        "followers": [
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e9807d37109815b277cd6d",
          "62e137614659c8aa4e84c644"
        ],
        "following": [
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e137614659c8aa4e84c644"
        ]
      },
      "comments": [
        "62e485a3489ca0233cfdcd87",
        "62e485a4489ca0233cfdcd8e"
      ],
      "likes": [
        "62e137614659c8aa4e84c644"
      ],
      "hasImage": true,
      "imageUrl": "0.0.0.0:9000/sysmap-bucket/62e137614659c8aa4e84c648/imagemjesus.png",
    },
    {
      "_id": "62e3e9d1e223d5326bdceaa1",
      "title": "fffsaa",
      "description": "dff",
      "profileId": {
        "_id": "62e137614659c8aa4e84c648",
        "username": "Amanda",
        "posts": [
          "62e3e9d1e223d5326bdceaa1",
          "62e43abdaeae3ea079291885",
          "62e98c58c1d53eb0f26a1feb"
        ],
        "followers": [
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e9807d37109815b277cd6d",
          "62e137614659c8aa4e84c644"
        ],
        "following": [
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e137614659c8aa4e84c644"
        ],
        
      },
      "comments": [],
      "likes": [
        "62e137614659c8aa4e84c644"
      ],
      "hasImage": false,
      "imageUrl": "none"
    },
    {
      "_id": "62e137614659c8aa4e84c68e",
      "title": "primeiro post do Junior",
      "description": "descrição para o post do Junior",
      "profileId": {
        "_id": "62e137614659c8aa4e84c668",
        "username": "Junior",
        "posts": [],
        "followers": [
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c644",
          "62e9807d37109815b277cd6d"
        ],
        "following": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664"
        ],
      },
      "comments": [
        "62e2da46afee90b3d4ccc07e",
        "62e2da5eafee90b3d4ccc085",
        "62e2db83afee90b3d4ccc091",
        "62e2dcb2afee90b3d4ccc09d",
        "62e2dcc1afee90b3d4ccc0a9",
        "62e2dcc8afee90b3d4ccc0b5",
        "62e2dcf0afee90b3d4ccc0c6",
        "62e2dd02afee90b3d4ccc0d0",
        "62e2dd45afee90b3d4ccc0ef",
        "62e2dde3afee90b3d4ccc0fb",
        "62e2de60afee90b3d4ccc114",
        "62e2de74afee90b3d4ccc120",
        "62e2de83afee90b3d4ccc12c",
        "62e2e02cafee90b3d4ccc138",
        "62e2e4baafee90b3d4ccc14e",
        "62e2e4ceafee90b3d4ccc15d",
        "62e2e4feafee90b3d4ccc263",
        "62e2e562afee90b3d4ccd2b9",
        "62e2e58bafee90b3d4ccd2c5",
        "62e2e641afee90b3d4ccd2d1",
        "62e2e759afee90b3d4ccd2dd"
      ],
      "likes": [
        "62e137614659c8aa4e84c648",
        "62e137614659c8aa4e84c64c",
        "62e137614659c8aa4e84c650",
        "62e137614659c8aa4e84c654",
        "62e137614659c8aa4e84c658",
        "62e137614659c8aa4e84c65c",
        "62e137614659c8aa4e84c660",
        "62e137614659c8aa4e84c664",
        "62e137614659c8aa4e84c644"
      ],
      "hasImage": false,
      "imageUrl": "none"
    },
    {
      "_id": "62e137614659c8aa4e84c68a",
      "title": "primeiro post do Rosana",
      "description": "descrição para o post do Rosana",
      "profileId": {
        "_id": "62e137614659c8aa4e84c664",
        "username": "Rosana",
        "posts": [],
        "followers": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c668",
          "62e9807d37109815b277cd6d"
        ],
        "following": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c668"
        ]
      },
      "comments": [],
      "likes": [
        "62e137614659c8aa4e84c648",
        "62e137614659c8aa4e84c64c",
        "62e137614659c8aa4e84c650",
        "62e137614659c8aa4e84c654",
        "62e137614659c8aa4e84c658",
        "62e137614659c8aa4e84c65c",
        "62e137614659c8aa4e84c660",
        "62e137614659c8aa4e84c668",
        "62e137614659c8aa4e84c644"
      ],
      "hasImage": false,
      "imageUrl": "none",
    },
    {
      "_id": "62e137614659c8aa4e84c686",
      "title": "primeiro post do cintia",
      "description": "descrição para o post do cintia",
      "profileId": {
        "_id": "62e137614659c8aa4e84c660",
        "username": "cintia",
        "posts": [],
        "followers": [
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e137614659c8aa4e84c644",
          "62e9807d37109815b277cd6d"
        ],
        "following": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668"
        ]
      },
      "comments": [],
      "likes": [
        "62e137614659c8aa4e84c644",
        "62e137614659c8aa4e84c648",
        "62e137614659c8aa4e84c64c",
        "62e137614659c8aa4e84c650",
        "62e137614659c8aa4e84c654",
        "62e137614659c8aa4e84c658",
        "62e137614659c8aa4e84c65c",
        "62e137614659c8aa4e84c664",
        "62e137614659c8aa4e84c668"
      ],
      "hasImage": false,
      "imageUrl": "none"
    },
    {
      "_id": "62e137614659c8aa4e84c682",
      "title": "primeiro post do leoonardo",
      "description": "descrição para o post do leoonardo",
      "profileId": {
        "_id": "62e137614659c8aa4e84c65c",
        "username": "leoonardo",
        "posts": [],
        "followers": [
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e137614659c8aa4e84c644",
          "62e9807d37109815b277cd6d"
        ],
        "following": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668"
        ]
      },
      "comments": [
        "62e306fc9482da3aacdf366f"
      ],
      "likes": [
        "62e137614659c8aa4e84c644",
        "62e137614659c8aa4e84c648",
        "62e137614659c8aa4e84c64c",
        "62e137614659c8aa4e84c650",
        "62e137614659c8aa4e84c654",
        "62e137614659c8aa4e84c658",
        "62e137614659c8aa4e84c660",
        "62e137614659c8aa4e84c664",
        "62e137614659c8aa4e84c668"
      ],
      "hasImage": false,
      "imageUrl": "none"
    },
    {
      "_id": "62e137614659c8aa4e84c67e",
      "title": "primeiro post do bruno",
      "description": "descrição para o post do bruno",
      "profileId": {
        "_id": "62e137614659c8aa4e84c658",
        "username": "bruno",
        "posts": [],
        "followers": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e9807d37109815b277cd6d"
        ],
        "following": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668"
        ]
      },
      "comments": [
        "62e2e7c5afee90b3d4ccd324"
      ],
      "likes": [
        "62e137614659c8aa4e84c648",
        "62e137614659c8aa4e84c64c",
        "62e137614659c8aa4e84c650",
        "62e137614659c8aa4e84c654",
        "62e137614659c8aa4e84c65c",
        "62e137614659c8aa4e84c660",
        "62e137614659c8aa4e84c664",
        "62e137614659c8aa4e84c668",
        "62e137614659c8aa4e84c644"
      ],
      "hasImage": false,
      "imageUrl": "none",
    },
    {
      "_id": "62e137614659c8aa4e84c67a",
      "title": "primeiro post do fredeudinho",
      "description": "descrição para o post do fredeudinho",
      "profileId": {
        "_id": "62e137614659c8aa4e84c654",
        "username": "fredeudinho",
        "posts": [],
        "followers": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e9807d37109815b277cd6d"
        ],
        "following": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c650",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668"
        ]
      },
      "comments": [
        "62e2ecd8afee90b3d4ccd337"
      ],
      "likes": [
        "62e137614659c8aa4e84c644",
        "62e137614659c8aa4e84c648",
        "62e137614659c8aa4e84c64c",
        "62e137614659c8aa4e84c650",
        "62e137614659c8aa4e84c658",
        "62e137614659c8aa4e84c65c",
        "62e137614659c8aa4e84c660",
        "62e137614659c8aa4e84c664",
        "62e137614659c8aa4e84c668"
      ],
      "hasImage": false,
      "imageUrl": "none"
    },
    {
      "_id": "62e137614659c8aa4e84c676",
      "title": "primeiro post do Monica",
      "description": "descrição para o post do Monica",
      "profileId": {
        "_id": "62e137614659c8aa4e84c650",
        "username": "Monica",
        "posts": [],
        "followers": [
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668",
          "62e9807d37109815b277cd6d",
          "62e137614659c8aa4e84c644"
        ],
        "following": [
          "62e137614659c8aa4e84c644",
          "62e137614659c8aa4e84c648",
          "62e137614659c8aa4e84c64c",
          "62e137614659c8aa4e84c654",
          "62e137614659c8aa4e84c658",
          "62e137614659c8aa4e84c65c",
          "62e137614659c8aa4e84c660",
          "62e137614659c8aa4e84c664",
          "62e137614659c8aa4e84c668"
        ]
      },
      "comments": [],
      "likes": [
        "62e137614659c8aa4e84c648",
        "62e137614659c8aa4e84c64c",
        "62e137614659c8aa4e84c654",
        "62e137614659c8aa4e84c658",
        "62e137614659c8aa4e84c65c",
        "62e137614659c8aa4e84c660",
        "62e137614659c8aa4e84c664",
        "62e137614659c8aa4e84c668",
        "62e137614659c8aa4e84c644"
      ],
      "hasImage": false,
      "imageUrl": "none"
    }
  ]
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item }) => (
          <PostCard
            post={item}
          />
        )}
      />
    </View>
  )
}

const style = StyleSheet.create({
  cardHeaderStyle: {
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitleStyle: {
    marginLeft: 15,
    fontWeight: "bold",
  },
  cardImageStyle: {
    resizeMode: "contain",
    maxHeight: 600,
    marginBottom: 15
  },
  descriptionStyle: {
    fontSize: 12
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between'
  }
})