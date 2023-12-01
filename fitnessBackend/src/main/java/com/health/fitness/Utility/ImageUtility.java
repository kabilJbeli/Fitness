package com.health.fitness.Utility;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;

import javax.imageio.ImageIO;

import net.coobird.thumbnailator.Thumbnails;

public class ImageUtility {
	public static byte[] compressImage(String image, ByteArrayOutputStream outputStream) throws IOException {
		byte[] bytes;
		if (image.contains("base64,")) {
			String[] splitedImage = image.split("base64,");

			bytes = Base64.getDecoder().decode(splitedImage[1]);
		} else {
			bytes = Base64.getDecoder().decode(image);
		}
		ByteArrayInputStream inputStream = new ByteArrayInputStream(bytes);
		BufferedImage originalImage = ImageIO.read(inputStream);
		Thumbnails.of(originalImage).size(originalImage.getWidth(), originalImage.getHeight()).outputFormat("JPEG")
				.outputQuality(0.25f).toOutputStream(outputStream);
		inputStream.close();

		return outputStream.toByteArray();
	}
}
