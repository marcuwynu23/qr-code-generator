/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
const qrCode = require("qrcode");
const fs = require("fs");

const generateQR = async (path, text) => {
	try {
		await qrCode.toFile(path, text, (err) => {
			if (err) {
				console.error(err);
			}
		});
	} catch (err) {
		console.error(err);
	}
};

const imgPath = "public/image/qrcode.jpg";

module.exports = {
	qrGeneratorGET: async (req, res) => {
		return await res.render("index.html", {
			isGenerated: fs.existsSync(imgPath),
		});
	},
	qrGeneratorPOST: async (req, res) => {
		await generateQR(imgPath, JSON.stringify({ name: req.body.data }));
		return res.redirect("/");
	},
};
