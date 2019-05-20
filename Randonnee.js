/**
 * @apiDefine RambleNotFoundError
 *
 * @apiError RambleNotFoundError L'id du point d'intérêt n'existe pas.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
      {
          "message": "Pas de randonnee pour cet id"
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
  @api {get} https://backpack-api-epitech.herokuapp.com/rambles/:id Renvoie la randonnee avec tous les points d'intérêts
  @apiName GetRamble
  @apiGroup Randonnee
 
 
  @apiSuccess {Integer} id id de la randonnee.
  @apiSuccess {String} name nom de la randonnee.
  @apiSuccess {InterestPoint} point points d'intérêts de la randonnee.
  @apiSuccess {String} type type de l'activité.
  @apiSuccess {String} uri uri de la randonnee.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
{
    "id": 41,
    "name": "test review 06/02 ramble point",
    "point": [
        {
            "id": 261,
            "name": "name test_review 06/02",
            "description": "description test_review 06/02",
            "lat": 53.2,
            "long": 24.5,
            "userName": "alex_review",
            "type": "Gite",
            "date": null,
            "rank": 0,
            "imageUrls": []
        },
        {
            "id": 262,
            "name": "name test_review2 06/02",
            "description": "description test_review2 06/02",
            "lat": 53.2,
            "long": 24.5,
            "userName": "alex_review",
            "type": "Gite",
            "date": null,
            "rank": 0,
            "imageUrls": []
        },
        {
            "id": 263,
            "name": "test_review",
            "description": "test",
            "lat": 53.2,
            "long": 24.5,
            "userName": "alex_review",
            "type": "Gite",
            "date": null,
            "rank": 2,
            "imageUrls": []
        }
    ],
    "uri": "https://backpack-api-epitech.herokuapp.com/rambles/41"
}

@ApiUse RambleNotFoundError
 */


/**
  @api {get} https://backpack-api-epitech.herokuapp.com/ramble Renvoie les randonnees de l'utilisateur authentifié
  @apiName GetUserRambles
  @apiGroup Randonnee
 
 
  @apiSuccess {Integer} id id de la randonnee.
  @apiSuccess {String} name nom de la randonnee.
  @apiSuccess {DateTime} date date de la randonnee.
  @apiSuccess {Int} difficulty difficultee de la randonnee (de 1 a 5).
  @apiSuccess {Float} travel_time duree de la randonnee.
  @apiSuccess {Int} step_number nombre de pas de la randonnee.
  @apiSuccess {String} imageUrls urls de images de la randonnee.
  @apiSuccess {String} uri uri de la randonnee.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
[
    {
        "id": 43,
        "name": "doc",
        "date": "Sun, 28 Apr 2019 08:43:17 -0000",
        "difficulty": 4,
        "travel time": 38,
        "step number": 3,
        "imageUrls": null,
        "uri": "https://backpack-api-epitech.herokuapp.com/rambles/43"
    },
    {
        "id": 42,
        "name": "test review 06/02 ramble point",
        "date": "Sun, 28 Apr 2019 08:32:30 -0000",
        "difficulty": 3,
        "travel time": 38,
        "step number": 3,
        "imageUrls": null,
        "uri": "https://backpack-api-epitech.herokuapp.com/rambles/42"
    }
]

 */

 /**
  @api {post} https://backpack-api-epitech.herokuapp.com/rambles? Créer une randonnee
  @apiName PostRamble
  @apiGroup Randonnee
 
  @apiParam {String} name nom de la randonnee.
  @apiParam {Dictionary} point points d'intérêts de la randonnee.
  @apiParam {Int} difficulty difficulte de la randonnee.
  @apiParam {Float} travel_time duree de la randonnee.
 
  @apiSuccess {Integer} id id de la randonnee.
  @apiSuccess {String} name nom de la randonnee.
  @apiSuccess {DateTime} date date de la randonnee.
  @apiSuccess {Int} difficulty difficultee de la randonnee (de 1 a 5).
  @apiSuccess {Float} travel_time duree de la randonnee.
  @apiSuccess {Int} step_number nombre de pas de la randonnee.
  @apiSuccess {String} imageUrls urls de images de la randonnee.
  @apiSuccess {String} uri uri de la randonnee.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
{
    "id": 43,
    "name": "doc",
    "date": "Sun, 28 Apr 2019 08:43:17 -0000",
    "difficulty": 4,
    "travel time": 38,
    "step number": 3,
    "imageUrls": null,
    "uri": "https://backpack-api-epitech.herokuapp.com/rambles/43"
}

@apiUse MissingArgs
 */