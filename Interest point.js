/**
 * @apiDefine InterestPointNotFoundError
 *
 * @apiError InterestPointNotFound L'id du point d'interet n'existe pas.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
	    "message": "poi :id doesn't exist. You have requested this URI [/poi/234] but did you mean /poi/<string:id> or /pois/ or /poi_me/<string:id> ?"
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
  @api {get} https://backpack-api-epitech.herokuapp.com/pois Renvoie tous les points d'intérêts
  @apiName GetInterestPoints
  @apiGroup Point d'interet
 
 
  @apiSuccess {Integer} id id du point d'interet.
  @apiSuccess {String} name nom du point d'interet.
  @apiSuccess {String} description description du point d'interet.
  @apiSuccess {String} lat latitude du point d'interet.
  @apiSuccess {String} long longitude du point d'interet.
  @apiSuccess {String} userName nom de l'utilisateur ayant créé le point d'interet.
  @apiSuccess {String} type type du point d'interet.
  @apiSuccess {String} rank classement entre 1 à 5 du point d'interet.
  @apiSuccess {String} imageUrls url du ou des images du point d'interet.
  @apiSuccess {String} uri uri du point d'interet.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
  [
    {
        "id": 74,
        "name": "Test Beijing ",
        "description": "Point 1",
        "lat": 39.9673940079415,
        "long": 116.322405951593,
        "userName": "guigui",
        "type": "Gite",
        "rank": 0,
        "imageUrls": [],
        "uri": "https://backpack-api-epitech.herokuapp.com/poi/74"
    },
    {
        "id": 75,
        "name": "Beijing zoo",
        "description": "Zoo Beijing ",
        "lat": 39.9390765221117,
        "long": 116.332062651204,
        "userName": "guigui",
        "type": "Gite",
        "rank": 0,
        "imageUrls": [],
        "uri": "https://backpack-api-epitech.herokuapp.com/poi/75"
    },
    etc...
 ]
 */

 /**
  @api {get} https://backpack-api-epitech.herokuapp.com/poi/:id Renvoie un point d'interet
  @apiName GetInterestPoint
  @apiGroup Point d'interet
 
  @apiParam {Number} id ID unique de l'utilisateur.

  @apiSuccess {Integer} id id du point d'interet.
  @apiSuccess {String} name nom du point d'interet.
  @apiSuccess {String} description description du point d'interet.
  @apiSuccess {String} lat latitude du point d'interet.
  @apiSuccess {String} long longitude du point d'interet.
  @apiSuccess {String} userName nom de l'utilisateur ayant créé le point d'interet.
  @apiSuccess {String} type type du point d'interet.
  @apiSuccess {String} rank classement entre 1 à 5 du point d'interet.
  @apiSuccess {String} imageUrls url du ou des images du point d'interet.
  @apiSuccess {String} uri uri du point d'interet.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
	{
	    "id": 74,
	    "name": "Test Beijing ",
	    "description": "Point 1",
	    "lat": 39.9673940079415,
	    "long": 116.322405951593,
	    "userName": "guigui",
	    "type": "Gite",
	    "rank": 0,
	    "imageUrls": [],
	    "uri": "https://backpack-api-epitech.herokuapp.com/poi/74"
	}

	@apiUse InterestPointNotFoundError
*/

/**
  @api {get} https://backpack-api-epitech.herokuapp.com/filter/:type Renvoie tous les points d'intérêts filtré par le type spécifié
  @apiName GetInterestPointsFiltred
  @apiGroup Point d'interet
 
 @apiParam {String} type type du point d'interet à filtrer.
 
  @apiSuccess {Integer} id id du point d'interet.
  @apiSuccess {String} name nom du point d'interet.
  @apiSuccess {String} description description du point d'interet.
  @apiSuccess {String} lat latitude du point d'interet.
  @apiSuccess {String} long longitude du point d'interet.
  @apiSuccess {String} userName nom de l'utilisateur ayant créé le point d'interet.
  @apiSuccess {String} type type du point d'interet.
  @apiSuccess {String} rank classement entre 1 à 5 du point d'interet.
  @apiSuccess {String} imageUrls url du ou des images du point d'interet.
  @apiSuccess {String} uri uri du point d'interet.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
  [
    {
        "id": 74,
        "name": "Test Beijing ",
        "description": "Point 1",
        "lat": 39.9673940079415,
        "long": 116.322405951593,
        "userName": "guigui",
        "type": "Gite",
        "rank": 0,
        "imageUrls": [],
        "uri": "https://backpack-api-epitech.herokuapp.com/poi/74"
    },
    {
        "id": 75,
        "name": "Beijing zoo",
        "description": "Zoo Beijing ",
        "lat": 39.9390765221117,
        "long": 116.332062651204,
        "userName": "guigui",
        "type": "Gite",
        "rank": 0,
        "imageUrls": [],
        "uri": "https://backpack-api-epitech.herokuapp.com/poi/75"
    },
    etc...
 ]
 */

 /**
  @api {get} https://backpack-api-epitech.herokuapp.com/pois_me Renvoie tous les points d'intérêts de l'utilisateur authentifié
  @apiName GetUserInterestPoint
  @apiGroup Point d'interet
 
  @apiSuccess {Integer} id id du point d'interet.
  @apiSuccess {String} name nom du point d'interet.
  @apiSuccess {String} description description du point d'interet.
  @apiSuccess {String} lat latitude du point d'interet.
  @apiSuccess {String} long longitude du point d'interet.
  @apiSuccess {String} userName nom de l'utilisateur ayant créé le point d'interet.
  @apiSuccess {String} type type du point d'interet.
  @apiSuccess {String} rank classement entre 1 à 5 du point d'interet.
  @apiSuccess {String} imageUrls url du ou des images du point d'interet.
  @apiSuccess {String} uri uri du point d'interet.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
[
    {
        "id": 280,
        "name": "doc",
        "description": "pour la doc",
        "lat": 58.2,
        "long": 28.5,
        "userName": "doc_api",
        "type": "Gite",
        "rank": 4,
        "imageUrls": [],
        "uri": "https://backpack-api-epitech.herokuapp.com/poi/280"
    },
    {
        "id": 281,
        "name": "doc2",
        "description": "saaezrez",
        "lat": 58.2,
        "long": 28.5,
        "userName": "doc_api",
        "type": null,
        "rank": 0,
        "imageUrls": [],
        "uri": "https://backpack-api-epitech.herokuapp.com/poi/281"
    },
    {
        "id": 282,
        "name": "doc3",
        "description": "pour la doc",
        "lat": 58.2,
        "long": 28.5,
        "userName": "doc_api",
        "type": "Gite",
        "rank": 3,
        "imageUrls": [],
        "uri": "https://backpack-api-epitech.herokuapp.com/poi/282"
    }
    etc...
]
 */

 /**
  @api {post} https://backpack-api-epitech.herokuapp.com/pois? Créer un point d'intérêt
  @apiName PostInterestPoint
  @apiGroup Point d'interet
 
  @apiParam {String} name nom du point d'interet.
  @apiParam {String} description description du point d'interet.
  @apiParam {String} lat latitude du point d'interet.
  @apiParam {String} long longitude du point d'interet.
  @apiParam {String} [type] type du point d'interet.
  @apiParam {String} [rank] classement entre 1 à 5 du point d'interet.
  @apiParam {File} [image] photo(s) du point d'intérêt.
 
  @apiSuccess {Integer} id id du point d'interet.
  @apiSuccess {String} name nom du point d'interet.
  @apiSuccess {String} description description du point d'interet.
  @apiSuccess {String} lat latitude du point d'interet.
  @apiSuccess {String} long longitude du point d'interet.
  @apiSuccess {String} userName nom de l'utilisateur ayant créé le point d'interet.
  @apiSuccess {String} type type du point d'interet.
  @apiSuccess {String} rank classement entre 1 à 5 du point d'interet.
  @apiSuccess {String} imageUrls url du ou des images du point d'interet.
  @apiSuccess {String} uri uri du point d'interet.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
{
    "id": 280,
    "name": "doc",
    "description": "pour la doc",
    "lat": 58.2,
    "long": 28.5,
    "userName": "doc_api",
    "type": "Gite",
    "rank": 4,
    "imageUrls": [],
    "uri": "https://backpack-api-epitech.herokuapp.com/poi/280"
}

@apiUse MissingArgs
 */

 /**
 * @api {put} https://backpack-api-epitech.herokuapp.com/poi/:id? Modifie une ou plusieurs infos d'un point d'interet
 * @apiName PutInterestPoint
 * @apiGroup Point d'interet
 *
  @apiParam {String} [name] nom du point d'interet.
  @apiParam {String} [description] description du point d'interet.
  @apiParam {String} [lat] latitude du point d'interet.
  @apiParam {String} [long] longitude du point d'interet.
  @apiParam {String} [rank] classement entre 1 à 5 du point d'interet.
  @apiParam {File} [image] photo(s) du point d'intérêt.

  @apiSuccess {Integer} id id du point d'interet.
  @apiSuccess {String} name nom du point d'interet.
  @apiSuccess {String} description description du point d'interet.
  @apiSuccess {String} lat latitude du point d'interet.
  @apiSuccess {String} long longitude du point d'interet.
  @apiSuccess {String} userName nom de l'utilisateur ayant créé le point d'interet.
  @apiSuccess {String} type type du point d'interet.
  @apiSuccess {String} rank classement entre 1 à 5 du point d'interet.
  @apiSuccess {String} imageUrls url du ou des images du point d'interet.
  @apiSuccess {String} uri uri du point d'interet.
 
  @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
	{
	    "id": 280,
	    "name": "new doc",
	    "description": "nouvelle description pour la doc",
	    "lat": 58.4,
	    "long": 28.2,
	    "userName": "doc_api",
	    "type": "Gite",
	    "rank": 5,
	    "imageUrls": [],
	    "uri": "https://backpack-api-epitech.herokuapp.com/poi/280"
}
 
  @apiUse UserNotFoundError
 */