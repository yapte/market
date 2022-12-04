import { Okpd2 } from "src/app/helpers/okpd2.interface";

export const OKPD2_CODES: Okpd2[] = [
    {
        actual: true,
        comment: null,
        code: "10.12",
        parentCode: "10.1",
        description: "Мясо сельскохозяйственной птицы и прочие продукты убоя, включая консервированные",
        hasChild: true
    },
    {
        actual: true,
        comment: null,
        code: "10.12.1",
        parentCode: "10.12",
        description: "Мясо птицы охлажденное, в том числе для детского питания",
        hasChild: true
    },
    {
        actual: true,
        comment: null,
        code: "10.12.10",
        parentCode: "10.12.1",
        description: "Мясо птицы охлажденное, в том числе для детского питания",
        hasChild: true
    },
    {
        actual: true,
        comment: null,
        code: "10.12.10.110",
        parentCode: "10.12.10",
        description: "Мясо кур, в том числе цыплят (включая цыплят-бройлеров) охлажденное",
        hasChild: false
    },
    {
        actual: true,
        comment: null,
        code: "10.12.10.120",
        parentCode: "10.12.10",
        description: "Мясо индеек, в том числе индюшат охлажденное",
        hasChild: false
    },
    {
        actual: true,
        comment: null,
        code: "10.12.10.130",
        parentCode: "10.12.10",
        description: "Мясо уток, в том числе утят охлажденное",
        hasChild: false
    },
    {
        actual: true,
        comment: null,
        code: "10.12.10.140",
        parentCode: "10.12.10",
        description: "Мясо гусей, в том числе гусят охлажденное",
        hasChild: false
    },
    {
        actual: true,
        comment: null,
        code: "10.12.10.150",
        parentCode: "10.12.10",
        description: "Мясо цесарок, в том числе цесарят охлажденное",
        hasChild: false
    },
    {
        actual: true,
        comment: null,
        code: "10.12.10.160",
        parentCode: "10.12.10",
        description: "Мясо перепелов, в том числе перепелят охлажденное",
        hasChild: false
    },
    {
        actual: true,
        comment: null,
        code: "10.12.10.170",
        parentCode: "10.12.10",
        description: "Мясо сельскохозяйственной птицы охлажденное для детского питания",
        hasChild: false
    }
]