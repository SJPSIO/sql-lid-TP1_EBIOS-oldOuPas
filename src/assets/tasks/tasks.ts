import { DatabaseId } from "../databases/databases";

export type TaskTopic = "select" | "where" | "orderBy" | "limit" |  "groupBy" | "join";

export interface Task {
  id: string;
  topic: TaskTopic;
  database: DatabaseId;
  referenceSql: string;
  tables: string[];
}

export const tasksList: Task[] = [
  // Simple select *
  { // Task A
    id: "select_all_scenario_codes",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT code FROM scenario;",
    tables: ["scenario"],
  },
  { // Task B with attributes
    id: "select_all_scenario_codes_and_descriptions",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT code, description FROM scenario;",
    tables: ["scenario"],
  },
  // Select *
  { // Task C
    id: "select_all_scenarii",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT * FROM scenario;",
    tables: ["scenario"],
  },
  { // Task D
    // Select with distinct
    id: "select_all_scenario_menaces_distinct",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT DISTINCT menace FROM scenario;",
    tables: ["scenario"],
  },
  // Select en autonomie
  { // Task 1
    id: "select_all_typemenace_name",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT nom FROM typeMenace;",
    tables: ["typeMenace"],
  },
  { // Task 2
    id: "select_all_critereSecurite",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT * FROM critereSecurite;",
    tables: ["critereSecurite"],
  },
  { // Task 3 with attributes
    id: "select_all_impact_name_and_details",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT libelle, details FROM impact;",
    tables: ["impact"],
  },
  { // Task 4 with attributes
    id: "select_all_typeAttaque_description_and_libelle_and_code",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT description, libelle, code FROM typeAttaque;",
    tables: ["typeAttaque"],
  },
  { // Task 5 with attributes
    id: "select_all_engendrer_codeScenario",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT codeScenario FROM engendrer;",
    tables: ["engendrer"],
  },
  { // Task 6
    // Select with distinct
    id: "select_all_engendrer_codeScenario_distinct",
    topic: "select",
    database: "ebios",
    referenceSql: "SELECT DISTINCT codeScenario FROM engendrer;",
    tables: ["engendrer"],
  },
  { // order by
    // Task E avec ASC
    id: "select_code_and_description_of_scenario_sorted_by_description_asc",
    topic: "orderBy",
    database: "ebios",
    referenceSql:
      "SELECT code, description FROM scenario ORDER BY description ASC;",
    tables: ["scenario"],
  },
  { // order by
    // Task F sans ASC
    id: "select_code_and_description_of_scenario_sorted_by_description_default",
    topic: "orderBy",
    database: "ebios",
    referenceSql:
      "SELECT code, description FROM scenario ORDER BY description;",
    tables: ["scenario"],
  },
  { // Task G avec DESC
    id: "select_code_and_support_and_description_of_scenario_sorted_by_support_asc_and_description_desc",
    topic: "orderBy",
    database: "ebios",
    referenceSql:
      "SELECT code, support, description FROM scenario ORDER BY support ASC, description DESC;",
    tables: ["scenario"],
  },
  // order by en autonomie
  { // Task 7 sans le asc
    id: "select_all_typeAttaque_sorted_by_libelle_default",
    topic: "orderBy",
    database: "ebios",
    referenceSql:
      "SELECT * FROM typeAttaque ORDER BY libelle;",
    tables: ["typeAttaque"],
  },
  { // Task 8 avec desc
    id: "select_all_gravite_code_and_libelle_sorted_by_code_desc",
    topic: "orderBy",
    database: "ebios",
    referenceSql:
      "SELECT code, libelle FROM gravite ORDER BY code DESC;",
    tables: ["gravite"],
  },
  { // Task 9 avec desc et asc
    id: "select_codeScenario_and_codeImpact_of_engendrer_sorted_by_codeScenario_asc_and_codeImpact_desc",
    topic: "orderBy",
    database: "ebios",
    referenceSql:
      "SELECT codeScenario, codeImpact FROM engendrer ORDER BY codeScenario ASC, codeImpact DESC;",
    tables: ["engendrer"],
  }
];
