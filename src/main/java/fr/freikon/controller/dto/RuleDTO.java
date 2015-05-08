package fr.freikon.controller.dto;

/**
 * Created by aimad on 08/05/15.
 */
public class RuleDTO {

    private long id;
    private String name;
    private String description;

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    @Override
    public String toString() {
        return "RuleDTO{" +
                "id=" + id +
                ", name=" + name +
                ", description=" + description +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RuleDTO ruleDTO = (RuleDTO) o;

        if (id != ruleDTO.id) return false;
        if (description != null ? !description.equals(ruleDTO.description) : ruleDTO.description != null) return false;
        if (name != null ? !name.equals(ruleDTO.name) : ruleDTO.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }

    public class Builder {
        private RuleDTO dto = new RuleDTO();

        public Builder id(long id) {
            dto.id = id;
            return this;
        }

        public Builder name(String name) {
            dto.name = name;
            return this;
        }

        public Builder description(String description) {
            dto.description = description;
            return this;
        }

        public RuleDTO build() {
            return dto;
        }
    }

    public static Builder builder() {
        return new RuleDTO().new Builder();
    }
}
