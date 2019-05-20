/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound L'id de l'utilisateur n'existe pas.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "user :id doesn't exist."
 *     }
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
 * @api {get} https://backpack-api-epitech.herokuapp.com/token Renvoie le token d'un utilisateur
 * @apiName GetToken
 * @apiGroup Token
 *
 * @apiParam {identification} connect couple identifiant/mot de passe.
 *
 * @apiSuccess {Integer} id_user id de l'utilisateur.
 * @apiSuccess {String} token token de l'utilisateur.
 *
 * @apiSuccessExample Success-Response:
 *	HTTP/1.1 200 OK
 *		{
 *		   "id_user": 117,
 *		   "token": "eyJhbGciOiJIUzI1NiIsImlhdCI6MTU1NTg1MTE3NCwiZXhwIjoxNTU1ODYxMTc0fQ.eyJpZCI6MTE3fQ.PyDtAvqQMwZWnzboYMgYH6tE5cJ3F_DkIIvfYUAltgw"
 *		}
 *
 * @apiError UnauthorizedAccess Mauvais couple identifiant/mot de passe.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 UNAUTHORIZED
 *	Unauthorized Access
 */

/**
 * @api {get} https://backpack-api-epitech.herokuapp.com/user/:id Renvoie les informations d'un utilisateur
 * @apiName GetUser
 * @apiGroup Utilisateur
 *
 * @apiParam {Number} id ID unique de l'utilisateur.
 *
 * @apiSuccess {Integer} id id de l'utilisateur.
 * @apiSuccess {String} username username de l'utilisateur.
 * @apiSuccess {String} password_hash password_hash.
 * @apiSuccess {String} description Description de l'utilisateur.
 * @apiSuccess {String} pic_url url de la photo de profil.
 * @apiSuccess {String} uri uri.
 *
 * @apiSuccessExample Success-Response:
 *	HTTP/1.1 200 OK
 *		{
 *			"id": 10,
 *			"username": "alexandre_test1",
 *			"password_hash": "$6$rounds=656000$oViW5P7XIoe84bD6$GVyDa5i4h.ObJie2tEZM.d/IR9mkcWS9MyMYkHcHiKBVuL0k9wf1ZeEb46e7v35O9GbE943bof/jkP3.cvqmj0",
 *			"description": null,
 *			"pic_url": null,
 *			"uri": "https://backpack-developement.herokuapp.com/user/10"
 *		}
 *
 * @apiUse UserNotFoundError
 */

/**
 * @api {get} https://backpack-api-epitech.herokuapp.com/users Renvoie tous les utilisateurs
 * @apiName GetUsers
 * @apiGroup Utilisateur
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *[
 *    {
 *       "id": 1,
 *       "username": "Nathy",
 *       "password_hash": "$6$rounds=656000$riAFRgj5xxTPdxUp$zuMaw3AN0a186qXnQnpdtuD.tj3bd57BdjTQEdW1Nj7bO.oRFwZqMLm.L3EO2Uf01kLJF3uF9afIZv9zPMLos0",
 *       "description": null,
 *       "pic_url": null,
 *       "uri": "https://backpack-developement.herokuapp.com/user/1"
 *   },
 *   {
 *       "id": 2,
 *       "username": "marsouin",
 *       "password_hash": "$6$rounds=656000$pNoKZkPzGZpNvt.h$RA/5DBCfuJzx.Maiy52hQOopmXq3Pee34MIBRMDO1IPDTgiVVTd5P2uO/gfNS498e3UpP58nk3tIceKfyZYB3.",
 *       "description": null,
 *       "pic_url": null,
 *       "uri": "https://backpack-developement.herokuapp.com/user/2"
 *   },
 *  etc...
 *]
 *
 */

 /**
 * @api {post} https://backpack-api-epitech.herokuapp.com/users? Créer un compte utilisateur
 * @apiName PostUser
 * @apiGroup Utilisateur
 *
 * @apiParam {String} username username de l'utilisateur.
 * @apiParam {String} password mot de passe de l'utilisateur.
 * @apiParam {String} description description de l'utilisateur.
 * @apiParam {File} [image] photo de profil de l'utilisateur.
 *
 *
 * @apiSuccess {Integer} id id de l'utilisateur.
 * @apiSuccess {String} username username de l'utilisateur.
 * @apiSuccess {String} password_hash password_hash.
 * @apiSuccess {String} description Description de l'utilisateur.
 * @apiSuccess {String} pic_url url de la photo de profil.
 * @apiSuccess {String} uri uri.
 *
 * @apiSuccessExample Success-Response:
 *	HTTP/1.1 200 OK
 *		{
 *		   "id": 117,
 *		   "username": "doc_api",
 *		   "password_hash": "$6$rounds=656000$Jafn0haO3f3m/.cs$UwVPGdPj48eZJI.xj.8pbTRQj0UDo0IFkXSDTUUSHNHvaLsBUdNJbBlbBgj2mvEyqs1LTCD8LfYzi1HoAdoJN.",
 *		  "description": "compte pour la doc api",
 *		   "pic_url": null,
 *		   "uri": "https://backpack-api-epitech.herokuapp.com/user/117"
 *		}
 *
 * @apiUse MissingArgs
 */

 /**
 * @api {put} https://backpack-api-epitech.herokuapp.com/user/:id? Modifie une ou plusieurs infos d'un compte utilisateur
 * @apiName PutUser
 * @apiGroup Utilisateur
 *
 * @apiParam {String} [new_username] username de l'utilisateur.
 * @apiParam {String} [new_password] mot de passe de l'utilisateur.
 * @apiParam {String} [new_description] description de l'utilisateur.
 * @apiParam {File} [image] photo de profil de l'utilisateur.
 *
 *
 * @apiSuccess {Integer} id id de l'utilisateur.
 * @apiSuccess {String} username username de l'utilisateur.
 * @apiSuccess {String} password_hash password_hash.
 * @apiSuccess {String} description Description de l'utilisateur.
 * @apiSuccess {String} pic_url url de la photo de profil.
 * @apiSuccess {String} uri uri.
 *
 * @apiSuccessExample Success-Response:
 *	HTTP/1.1 200 OK
 *		{
 *		   "id": 117,
 *		   "username": "doc_api",
 *		   "password_hash": "$6$rounds=656000$Jafn0haO3f3m/.cs$UwVPGdPj48eZJI.xj.8pbTRQj0UDo0IFkXSDTUUSHNHvaLsBUdNJbBlbBgj2mvEyqs1LTCD8LfYzi1HoAdoJN.",
 *		  "description": "nouvelle description pour la doc",
 *		   "pic_url": null,
 *		   "uri": "https://backpack-api-epitech.herokuapp.com/user/117"
 *		}
 *
 * @apiUse UserNotFoundError
 */
