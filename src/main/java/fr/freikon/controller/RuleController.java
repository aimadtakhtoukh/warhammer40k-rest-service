package fr.freikon.controller;

import fr.freikon.beans.Rule;
import fr.freikon.controller.dto.RuleDTO;
import fr.freikon.service.RuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by aimad on 25/04/15.
 */
@RestController
@RequestMapping("/rule/rest")
public class RuleController {

    @Autowired
    private RuleService service;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<RuleDTO> getAll() {
        return service.getAll().stream()
                .map(r -> getDTOFrom(r))
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Rule get(@PathVariable long id) {
        return service.get(id);
    }

    private static RuleDTO getDTOFrom(Rule rule) {
        if (rule == null) {
            return null;
        }
        return RuleDTO.builder()
                .id(rule.getId())
                .name(rule.getName())
                .description(
                        (rule.getDescription().length() >= 50) ?
                                rule.getDescription().substring(0, 50).concat("...") :
                                rule.getDescription()
                )
                .build();
    }

}
