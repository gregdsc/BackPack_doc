/**
 * @apiDefine CommentNotFoundError
 *
 * @apiError CommentFoundError L'id du point d'interet n'existe pas.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
      {
          "message": "Pas de commentaire pour cet id"
      }
 */

 /**
 * @apiDefine MissingArgs
 *
 * @apiError MissingAruments Pas assez d'arguments.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *		{
 *		   "message": "Missing arguments"
 *		}
 */

/**
  @api {get} https://backpack-api-epitech.herokuapp.com/comments Renvoie tous les commentaires
  @apiName GetComments
  @apiGroup Commentaire
 
 
  @apiSuccess {Integer} id id du commentaire.
  @apiSuccess {String} username nom de l'utilisateur ayant ecrit le commentaire.
  @apiSuccess {String} details texte du commentaire.
  @apiSuccess {Int} rank note du commentaire (de 1 a 5).
  @apiSuccess {DateTime} date date et heure de la publication du commentaire.
  @apiSuccess {DateTime} last_modification date et heure de la derniere modification du commentaire.

 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
    "comment": [
        {
            "id": 1,
            "username": "alex_review",
            "details": "changement du commentaire ",
            "rank": 2,
            "date": "Tue, 05 Feb 2019 22:29:52 -0000",
            "last modification": "Wed, 06 Feb 2019 10:24:58 -0000"
        },
        {
            "id": 8,
            "username": "alex_review",
            "details": "ce point sert de test pour la review du 06/02 ceci est un commentaire ",
            "rank": 4,
            "date": "Tue, 05 Feb 2019 23:31:53 -0000",
            "last modification": "Tue, 05 Feb 2019 23:31:53 -0000"
        },
        {
            "id": 7,
            "username": "alex_review",
            "details": "ce point sert de test pour la review du 06/02 ceci est un commentaire ",
            "rank": 4,
            "date": "Tue, 05 Feb 2019 23:30:28 -0000",
            "last modification": "Tue, 05 Feb 2019 23:30:28 -0000"
        },
        {
            "id": 6,
            "username": "alex_review",
            "details": "ce point sert de test pour la review du 06/02 ceci est un commentaire ",
            "rank": 4,
            "date": "Tue, 05 Feb 2019 23:29:17 -0000",
            "last modification": "Tue, 05 Feb 2019 23:29:17 -0000"
        },
        {
            "id": 4,
            "username": "alexandre_testr",
            "details": "ce point sert de test pour la review du 06/02 ceci est un commentaire avec un autre utilisateur",
            "rank": 4,
            "date": "Tue, 05 Feb 2019 23:15:23 -0000",
            "last modification": "Tue, 05 Feb 2019 23:15:23 -0000"
        }
    ]

@ApiUse RambleNotFoundError
 */


/**
  @api {get} https://backpack-api-epitech.herokuapp.com/comment/:id Renvoie un commentaire
  @apiName GetComment
  @apiGroup Commentaire
 
 
  @apiSuccess {Integer} id id du commentaire.
  @apiSuccess {String} username nom de l'utilisateur ayant ecrit le commentaire.
  @apiSuccess {String} details texte du commentaire.
  @apiSuccess {Int} rank note du commentaire (de 1 a 5).
  @apiSuccess {DateTime} date date et heure de la publication du commentaire.
  @apiSuccess {DateTime} last_modification date et heure de la derniere modification du commentaire.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
    {
        "id": 10,
        "username": "doc_api",
        "details": "belle doc mais manque les accents :)",
        "rank": 4,
        "date": "2019-04-28 09:07:04.853995",
        "last modification": "2019-04-28 09:07:04.853995"
    }

  @ApiUse CommentNotFoundError
 */

 /**
  @api {post} https://backpack-api-epitech.herokuapp.com/comments? Créer un commentaire
  @apiName PostComment
  @apiGroup Commentaire
 
  @apiParam {String} description texte du commentaire.
  @apiParam {int} rank note du commentaire (de 1 a 5).
 
  @apiSuccess {Integer} id id du commentaire.
  @apiSuccess {String} username nom de l'utilisateur ayant ecrit le commentaire.
  @apiSuccess {String} details texte du commentaire.
  @apiSuccess {Int} rank note du commentaire (de 1 a 5).
  @apiSuccess {DateTime} date date et heure de la publication du commentaire.
  @apiSuccess {DateTime} last_modification date et heure de la derniere modification du commentaire.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
    {
        "id": 10,
        "username": "doc_api",
        "details": "belle doc mais manque les accents :)",
        "rank": 4,
        "date": "2019-04-28 09:07:04.853995",
        "last modification": "2019-04-28 09:07:04.853995"
    }

@apiUse MissingArgs
 */