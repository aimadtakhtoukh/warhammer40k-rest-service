package fr.freikon.controller;

import fr.freikon.beans.Rule;
import fr.freikon.service.RuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by aimad on 25/04/15.
 */
@RestController
@RequestMapping("/rule/rest")
public class RuleController {

    @Autowired
    private RuleService service;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Rule> getAll() {
        return service.getAll();
    }

}
