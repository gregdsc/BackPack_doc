/**
 * @apiDefine ActivityNotFoundError
 *
 * @apiError ActivityNotFoundError L'id de l'activité n'existe pas.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
      {
          "message": "Please enter an activity before. You have requested this URI [/activity] but did you mean /activity or /activity/ or /activity/km/ ?"
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
  @api {get} https://backpack-api-epitech.herokuapp.com/activities Renvoie toutes les activités (besoin d'être authentifié)
  @apiName GetActivities
  @apiGroup Activite
 
 
  @apiSuccess {Integer} id id de l'activité.
  @apiSuccess {String} name nom de l'activité.
  @apiSuccess {String} start_time date et heure du début de l'activité.
  @apiSuccess {String} end_time date et heure de fin de l'activité.
  @apiSuccess {String} pas nombre de pas effectués pendant l'activité.
  @apiSuccess {String} km km parcourue pendant l'activité.
  @apiSuccess {String} calorie calorie dépensées pendant l'activité.
  @apiSuccess {String} speed vitesse moyenne en km/h pendant l'activité.
  @apiSuccess {String} type type de l'activité.
  @apiSuccess {String} uri uri de l'activité.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
[
    {
        "id": 1,
        "name": "course easy",
        "start_time": "2019-09-08 08:45:23",
        "end_time": "\"2019-19-15 10:45:10\"",
        "pas": 13000,
        "km": 11,
        "calorie": 434,
        "speed": 12.4,
        "type": "course",
        "uri": "https://backpack-api-epitech.herokuapp.com/"
    },
    {
        "id": 2,
        "name": "course easy",
        "start_time": "2019-09-08 08:45:23",
        "end_time": "2019-19-15 10:45:10",
        "pas": 13000,
        "km": 11,
        "calorie": 434,
        "speed": 12.4,
        "type": "course",
        "uri": "https://backpack-api-epitech.herokuapp.com/"
    },
    etc...
 ]
 */

 /**
  @api {get} https://backpack-api-epitech.herokuapp.com/activity Renvoie toutes les activités de l'utilisateur authentifié
  @apiName GetUserActivities
  @apiGroup Activite

  @apiSuccess {Integer} id id de l'activité.
  @apiSuccess {String} name nom de l'activité.
  @apiSuccess {String} start_time date et heure du début de l'activité.
  @apiSuccess {String} end_time date et heure de fin de l'activité.
  @apiSuccess {String} pas nombre de pas effectués pendant l'activité.
  @apiSuccess {String} km km parcourue pendant l'activité.
  @apiSuccess {String} calorie calorie dépensées pendant l'activité.
  @apiSuccess {String} speed vitesse moyenne en km/h pendant l'activité.
  @apiSuccess {String} type type de l'activité.
  @apiSuccess {String} uri uri de l'activité.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
	{
      "id": 1,
      "name": "course easy",
      "start_time": "2019-09-08 08:45:23",
      "end_time": "\"2019-19-15 10:45:10\"",
      "pas": 13000,
      "km": 11,
      "calorie": 434,
      "speed": 12.4,
      "type": "course",
      "uri": "https://backpack-api-epitech.herokuapp.com/"
	}

	@apiUse ActivityNotFoundError
*/

 /**
  @api {post} https://backpack-api-epitech.herokuapp.com/activities? Créer une activité (besoin d'être authentifié)
  @apiName PostActivity
  @apiGroup Activite
 
  @apiParam {String} name nom de l'activité.
  @apiParam {String} start_time date et heure du début de l'activité.
  @apiParam {String} end_time date et heure de fin de l'activité.
  @apiParam {String} pas nombre de pas effectués pendant l'activité.
  @apiParam {String} km km parcourue pendant l'activité.
  @apiParam {String} calorie calorie dépensées pendant l'activité.
  @apiParam {String} speed vitesse moyenne en km/h durant l'activité.
  @apiParam {String} type type de l'activité.
 
  @apiSuccess {Integer} id id de l'activité.
  @apiSuccess {String} name nom de l'activité.
  @apiSuccess {String} start_time date et heure du début de l'activité.
  @apiSuccess {String} end_time date et heure de fin de l'activité.
  @apiSuccess {String} pas nombre de pas effectués pendant l'activité.
  @apiSuccess {String} km km parcourue pendant l'activité.
  @apiSuccess {String} calorie calorie dépensées pendant l'activité.
  @apiSuccess {String} speed vitesse moyenne en km/h pendant l'activité.
  @apiSuccess {String} type type de l'activité.
  @apiSuccess {String} uri uri de l'activité.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
{
    "id": 46,
    "name": "randonn\ufffd pour la doc",
    "start_time": "2019-12-12 08:45:23",
    "end_time": "2019-12-12 10:45:10.000000",
    "pas": 9800,
    "km": 7.6,
    "calorie": 323,
    "speed": 5.4,
    "type": "marche",
    "uri": "https://backpack-api-epitech.herokuapp.com/"
}

@apiUse MissingArgs
 */