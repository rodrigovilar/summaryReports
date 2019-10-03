package io.demo.potter.softwareexample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import io.demo.potter.softwareexample.core.config.AppContext;

/**
 * Main class of application.
 * 
 * @author Virtus
 */
@SpringBootApplication
@EnableCaching
@EnableWebMvc
public class SoftwareexampleApplication {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(SoftwareexampleApplication.class, args);
		
		AppContext.loadApplicationContext(ctx);
	}
}
