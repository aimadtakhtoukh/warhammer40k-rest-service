package fr.freikon.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by aimad on 08/05/15.
 */
@Controller
public class IndexController {

    @RequestMapping(value = "/*", method = RequestMethod.GET)
    public String showIndex() {
        return "index.html";
    }

    @RequestMapping("/scripts/{script}.js")
    public String getScript(@PathVariable String script) {
        return "scripts/" + script + ".js";
    }

    @RequestMapping("/styles/{style}.css")
    public String getStyle(@PathVariable String style) {
        return "styles/" + style + ".css";
    }

    @RequestMapping("/assets/images/{img}.{type}")
    public String getImg(@PathVariable String img, @PathVariable String type) {
        return "/assets/images/" + img + "." + type;
    }
}
