package fr.freikon.beans;

import javax.persistence.*;

/**
 * Created by aimad on 25/04/15.
 */

@Entity
public class Rule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    private String name;
    private String description;
    private String codex;
    private int page;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getCodex() {
        return codex;
    }
    public void setCodex(String codex) {
        this.codex = codex;
    }

    public int getPage() {
        return page;
    }
    public void setPage(int page) {
        this.page = page;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Rule rule = (Rule) o;

        if (id != rule.id) return false;
        if (page != rule.page) return false;
        if (codex != null ? !codex.equals(rule.codex) : rule.codex != null) return false;
        if (description != null ? !description.equals(rule.description) : rule.description != null) return false;
        if (name != null ? !name.equals(rule.name) : rule.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (codex != null ? codex.hashCode() : 0);
        result = 31 * result + page;
        return result;
    }

    @Override
    public String toString() {
        return "Rule{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", codex='" + codex + '\'' +
                ", page=" + page +
                '}';
    }
}
