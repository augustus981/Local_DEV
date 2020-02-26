package com.bosch.dee.eauth.util;

import java.nio.charset.Charset;
import java.util.Random;

public class util {
	public static String PassWordGeneration(int length) {
		String candidateChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		StringBuilder sb = new StringBuilder();
		Random random = new Random();
		for (int i = 0; i < length; i++) {
			sb.append(candidateChars.charAt(random.nextInt(candidateChars.length())));
		}

		return sb.toString();
	}
}
