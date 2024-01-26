const express = require("express");

const ctrl = require("../controllers/contactsControllers.js");
const  validateBody  = require("../helpers/validateBody.js");
const schemas = require("../schemas/contactsSchemas.js");
const isValidId = require("../helpers/isValidId.js");


const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", isValidId, ctrl.getOneContact);

contactsRouter.delete("/:id", isValidId, ctrl.deleteContact);

contactsRouter.post(
  "/",
  validateBody(schemas.createContactSchema),
  ctrl.createContact
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(schemas.updateContactSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite", 
  isValidId,
  validateBody(schemas.updateFavoriteSchema), 
  ctrl.updateStatusContact);

module.exports = contactsRouter;
