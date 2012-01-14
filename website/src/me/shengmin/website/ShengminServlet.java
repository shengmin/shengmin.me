package me.shengmin.website;

import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class ShengminServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, my site is currently under construction. Please check back later. :)");
	}
}
