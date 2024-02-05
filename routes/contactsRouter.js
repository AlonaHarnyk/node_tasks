const express = require("express");

const ctrl = require("../controllers/contactsControllers.js");
const  validateBody  = require("../helpers/validateBody.js");
const {schemas} = require("../models/contact.js");
const isValidId = require("../helpers/isValidId.js");
const authenticate = require("../middlewares/authenticate.js")


const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, ctrl.getAllContacts);

contactsRouter.get("/:id", authenticate, isValidId, ctrl.getOneContact);

contactsRouter.delete("/:id", authenticate, isValidId, ctrl.deleteContact);

contactsRouter.post(
  "/", authenticate,
  validateBody(schemas.createContactSchema),
  ctrl.createContact
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.updateContactSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite", 
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema), 
  ctrl.updateStatusContact);

module.exports = contactsRouter;
