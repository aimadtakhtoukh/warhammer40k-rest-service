package fr.freikon.service;

import fr.freikon.beans.Rule;
import fr.freikon.persistence.RuleDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by aimad on 25/04/15.
 */

@Component
public class RuleService {

    @Autowired
    private RuleDAO dao;

    public Rule get(long id) {
        return dao.get(id);
    }

    public List<Rule> getAll() {
        return dao.getAll();
    }

}
