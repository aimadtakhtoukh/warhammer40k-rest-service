package fr.freikon.persistence;

import fr.freikon.beans.Rule;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * Created by aimad on 25/04/15.
 */

@Repository
public class RuleDAO {

    @PersistenceContext(unitName = "WarhammerPU")
    private EntityManager em;

    public Rule get(long id) {
        return em.find(Rule.class, id);
    }

    public List<Rule> getAll() {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Rule> cq = cb.createQuery(Rule.class);
        Root<Rule> from = cq.from(Rule.class);
        cq.select(from);
        TypedQuery<Rule> q = em.createQuery(cq);
        return q.getResultList();
    }

}
