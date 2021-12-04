import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-22a39d25","/about.html","Über OCR4all",["/about","/about.md"]],
  ["v-87e9e61a","/activities.html","Aktivitäten",["/activities","/activities.md"]],
  ["v-5d7259d4","/guide.html","",["/guide","/guide.md"]],
  ["v-8daa1a0e","/","Startseite",["/index.html","/index.md"]],
  ["v-24bf7ed1","/info_contact.html","Informationen und Kontakte",["/info_contact","/info_contact.md"]],
  ["v-3ac5ce46","/projects.html","Projekte",["/projects","/projects.md"]],
  ["v-1d79747a","/team.html","Team",["/team","/team.md"]],
  ["v-64f82839","/en/about.html","About",["/en/about","/en/about.md"]],
  ["v-21f64e5f","/en/activities.html","Activities",["/en/activities","/en/activities.md"]],
  ["v-139b5e2a","/en/guide.html","",["/en/guide","/en/guide.md"]],
  ["v-863fd586","/en/info_contact.html","Information and Contacts",["/en/info_contact","/en/info_contact.md"]],
  ["v-272a7ab2","/en/projects.html","Projects",["/en/projects","/en/projects.md"]],
  ["v-2d0a870d","/en/","Homepage",["/en/index.html","/en/README.md"]],
  ["v-1931efa2","/en/team.html","Team",["/en/team","/en/team.md"]],
  ["v-b2d5dcfe","/software_download/software_download.html","Software und Download",["/software_download/software_download","/software_download/software_download.md"]],
  ["v-f25310fa","/software_download/vm-download.html","",["/software_download/vm-download","/software_download/vm-download.md"]],
  ["v-24d40195","/en/software_download/software_download.html","Software and Download",["/en/software_download/software_download","/en/software_download/software_download.md"]],
  ["v-ca7ff2d2","/en/software_download/vm-download.html","",["/en/software_download/vm-download","/en/software_download/vm-download.md"]],
  ["v-5ddf8682","/ocr4all_userguide/0.FrontPage/0.FrontPage.html","0.Start",["/ocr4all_userguide/0.FrontPage/0.FrontPage","/ocr4all_userguide/0.FrontPage/0.FrontPage.md"]],
  ["v-4fd157e8","/ocr4all_userguide/1.OCR4all/1.1_Introduction.html","1.1 Einführung",["/ocr4all_userguide/1.OCR4all/1.1_Introduction","/ocr4all_userguide/1.OCR4all/1.1_Introduction.md"]],
  ["v-5b5444be","/ocr4all_userguide/1.OCR4all/1.2_Set%20up%20and%20folder%20structure.html","1.2 Einrichtung und Ordnerstruktur",["/ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.html","/ocr4all_userguide/1.OCR4all/1.2_Set%20up%20and%20folder%20structure","/ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.md","/ocr4all_userguide/1.OCR4all/1.2_Set%20up%20and%20folder%20structure.md"]],
  ["v-73af71da","/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation.html","2. Scan Vorbereitung",["/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation","/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation.md"]],
  ["v-6df0e67c","/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting%20started.html","3.1 OCR4all starten",["/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.html","/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting%20started","/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.md","/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting%20started.md"]],
  ["v-8fbffe9c","/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project%20Overview.html","3.2 Project Overview",["/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project Overview.html","/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project%20Overview","/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project Overview.md","/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project%20Overview.md"]],
  ["v-6173b5ba","/ocr4all_userguide/4.Workflow/4.001-Process_Flow.html","4. Workflow",["/ocr4all_userguide/4.Workflow/4.001-Process_Flow","/ocr4all_userguide/4.Workflow/4.001-Process_Flow.md"]],
  ["v-4705e7a3","/ocr4all_userguide/4.Workflow/4.002-Preprocessing.html","",["/ocr4all_userguide/4.Workflow/4.002-Preprocessing","/ocr4all_userguide/4.Workflow/4.002-Preprocessing.md"]],
  ["v-0ec6da1e","/ocr4all_userguide/4.Workflow/4.003-Noise_Removal.html","",["/ocr4all_userguide/4.Workflow/4.003-Noise_Removal","/ocr4all_userguide/4.Workflow/4.003-Noise_Removal.md"]],
  ["v-4e752410","/ocr4all_userguide/4.Workflow/4.004.0-Segmentation-LAREX.html","",["/ocr4all_userguide/4.Workflow/4.004.0-Segmentation-LAREX","/ocr4all_userguide/4.Workflow/4.004.0-Segmentation-LAREX.md"]],
  ["v-4b18cd08","/ocr4all_userguide/4.Workflow/4.004.1-Initial%20Settings.html","",["/ocr4all_userguide/4.Workflow/4.004.1-Initial Settings.html","/ocr4all_userguide/4.Workflow/4.004.1-Initial%20Settings","/ocr4all_userguide/4.Workflow/4.004.1-Initial Settings.md","/ocr4all_userguide/4.Workflow/4.004.1-Initial%20Settings.md"]],
  ["v-5d313b3a","/ocr4all_userguide/4.Workflow/4.004.2-Overview%20and%20toolbar.html","",["/ocr4all_userguide/4.Workflow/4.004.2-Overview and toolbar.html","/ocr4all_userguide/4.Workflow/4.004.2-Overview%20and%20toolbar","/ocr4all_userguide/4.Workflow/4.004.2-Overview and toolbar.md","/ocr4all_userguide/4.Workflow/4.004.2-Overview%20and%20toolbar.md"]],
  ["v-dbc75344","/ocr4all_userguide/4.Workflow/4.004.3-Specific%20settings.html","",["/ocr4all_userguide/4.Workflow/4.004.3-Specific settings.html","/ocr4all_userguide/4.Workflow/4.004.3-Specific%20settings","/ocr4all_userguide/4.Workflow/4.004.3-Specific settings.md","/ocr4all_userguide/4.Workflow/4.004.3-Specific%20settings.md"]],
  ["v-346c550d","/ocr4all_userguide/4.Workflow/4.004.4-Exemplary%20page%20segmentation.html","",["/ocr4all_userguide/4.Workflow/4.004.4-Exemplary page segmentation.html","/ocr4all_userguide/4.Workflow/4.004.4-Exemplary%20page%20segmentation","/ocr4all_userguide/4.Workflow/4.004.4-Exemplary page segmentation.md","/ocr4all_userguide/4.Workflow/4.004.4-Exemplary%20page%20segmentation.md"]],
  ["v-05550234","/ocr4all_userguide/4.Workflow/4.004.5-Additional%20processing%20options.html","",["/ocr4all_userguide/4.Workflow/4.004.5-Additional processing options.html","/ocr4all_userguide/4.Workflow/4.004.5-Additional%20processing%20options","/ocr4all_userguide/4.Workflow/4.004.5-Additional processing options.md","/ocr4all_userguide/4.Workflow/4.004.5-Additional%20processing%20options.md"]],
  ["v-5950c332","/ocr4all_userguide/4.Workflow/4.004.6-Final%20steps%20with%20LAREX.html","",["/ocr4all_userguide/4.Workflow/4.004.6-Final steps with LAREX.html","/ocr4all_userguide/4.Workflow/4.004.6-Final%20steps%20with%20LAREX","/ocr4all_userguide/4.Workflow/4.004.6-Final steps with LAREX.md","/ocr4all_userguide/4.Workflow/4.004.6-Final%20steps%20with%20LAREX.md"]],
  ["v-598bc1e5","/ocr4all_userguide/4.Workflow/4.005-Line%20Segmentation.html","",["/ocr4all_userguide/4.Workflow/4.005-Line Segmentation.html","/ocr4all_userguide/4.Workflow/4.005-Line%20Segmentation","/ocr4all_userguide/4.Workflow/4.005-Line Segmentation.md","/ocr4all_userguide/4.Workflow/4.005-Line%20Segmentation.md"]],
  ["v-ec4f5a04","/ocr4all_userguide/4.Workflow/4.006-Recognition.html","",["/ocr4all_userguide/4.Workflow/4.006-Recognition","/ocr4all_userguide/4.Workflow/4.006-Recognition.md"]],
  ["v-349f4d73","/ocr4all_userguide/4.Workflow/4.007-Ground-Truth-Production.html","",["/ocr4all_userguide/4.Workflow/4.007-Ground-Truth-Production","/ocr4all_userguide/4.Workflow/4.007-Ground-Truth-Production.md"]],
  ["v-44ee37ba","/ocr4all_userguide/4.Workflow/4.008-Evaluation.html","",["/ocr4all_userguide/4.Workflow/4.008-Evaluation","/ocr4all_userguide/4.Workflow/4.008-Evaluation.md"]],
  ["v-567fadf4","/ocr4all_userguide/4.Workflow/4.009-Training.html","",["/ocr4all_userguide/4.Workflow/4.009-Training","/ocr4all_userguide/4.Workflow/4.009-Training.md"]],
  ["v-60863502","/ocr4all_userguide/4.Workflow/4.010-Post_Correction.html","",["/ocr4all_userguide/4.Workflow/4.010-Post_Correction","/ocr4all_userguide/4.Workflow/4.010-Post_Correction.md"]],
  ["v-2f9260be","/ocr4all_userguide/4.Workflow/4.011-Result_Generation.html","",["/ocr4all_userguide/4.Workflow/4.011-Result_Generation","/ocr4all_userguide/4.Workflow/4.011-Result_Generation.md"]],
  ["v-1edef05b","/ocr4all_userguide/5.Errors/5-Errors-Problems.html","5. Fehler, häufige Probleme und ihre Vermeidung",["/ocr4all_userguide/5.Errors/5-Errors-Problems","/ocr4all_userguide/5.Errors/5-Errors-Problems.md"]],
  ["v-2257cdd3","/en/ocr4all_userguide/0.FrontPage/0.FrontPage.html","0. Start",["/en/ocr4all_userguide/0.FrontPage/0.FrontPage","/en/ocr4all_userguide/0.FrontPage/0.FrontPage.md"]],
  ["v-31c58358","/en/ocr4all_userguide/1.OCR4all/1.1_Introduction.html","1.1 Introduction",["/en/ocr4all_userguide/1.OCR4all/1.1_Introduction","/en/ocr4all_userguide/1.OCR4all/1.1_Introduction.md"]],
  ["v-76ade4d2","/en/ocr4all_userguide/1.OCR4all/1.2_Set%20up%20and%20folder%20structure.html","1.2 Set up and folder structure",["/en/ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.html","/en/ocr4all_userguide/1.OCR4all/1.2_Set%20up%20and%20folder%20structure","/en/ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.md","/en/ocr4all_userguide/1.OCR4all/1.2_Set%20up%20and%20folder%20structure.md"]],
  ["v-0b109e24","/en/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation.html","2. Scan and Image Preparation (ScanTailor)",["/en/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation","/en/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation.md"]],
  ["v-6cc908e0","/en/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting%20started.html","3.1 Getting started",["/en/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.html","/en/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting%20started","/en/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.md","/en/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting%20started.md"]],
  ["v-5c6fe3c4","/en/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project%20Overview.html","3.2 Project Overview",["/en/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project Overview.html","/en/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project%20Overview","/en/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project Overview.md","/en/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project%20Overview.md"]],
  ["v-29f1b064","/en/ocr4all_userguide/4.Workflow/4.001-Process_Flow.html","",["/en/ocr4all_userguide/4.Workflow/4.001-Process_Flow","/en/ocr4all_userguide/4.Workflow/4.001-Process_Flow.md"]],
  ["v-203e8fe2","/en/ocr4all_userguide/4.Workflow/4.002-Preprocessing.html","",["/en/ocr4all_userguide/4.Workflow/4.002-Preprocessing","/en/ocr4all_userguide/4.Workflow/4.002-Preprocessing.md"]],
  ["v-bd113946","/en/ocr4all_userguide/4.Workflow/4.003-Noise_Removal.html","",["/en/ocr4all_userguide/4.Workflow/4.003-Noise_Removal","/en/ocr4all_userguide/4.Workflow/4.003-Noise_Removal.md"]],
  ["v-2e1f8c0c","/en/ocr4all_userguide/4.Workflow/4.004.0-Segmentation-LAREX.html","",["/en/ocr4all_userguide/4.Workflow/4.004.0-Segmentation-LAREX","/en/ocr4all_userguide/4.Workflow/4.004.0-Segmentation-LAREX.md"]],
  ["v-2fcdb790","/en/ocr4all_userguide/4.Workflow/4.004.1-Initial%20Settings.html","",["/en/ocr4all_userguide/4.Workflow/4.004.1-Initial Settings.html","/en/ocr4all_userguide/4.Workflow/4.004.1-Initial%20Settings","/en/ocr4all_userguide/4.Workflow/4.004.1-Initial Settings.md","/en/ocr4all_userguide/4.Workflow/4.004.1-Initial%20Settings.md"]],
  ["v-380d0b64","/en/ocr4all_userguide/4.Workflow/4.004.2-Overview%20and%20toolbar.html","",["/en/ocr4all_userguide/4.Workflow/4.004.2-Overview and toolbar.html","/en/ocr4all_userguide/4.Workflow/4.004.2-Overview%20and%20toolbar","/en/ocr4all_userguide/4.Workflow/4.004.2-Overview and toolbar.md","/en/ocr4all_userguide/4.Workflow/4.004.2-Overview%20and%20toolbar.md"]],
  ["v-2ff40a6c","/en/ocr4all_userguide/4.Workflow/4.004.3-Specific%20settings.html","",["/en/ocr4all_userguide/4.Workflow/4.004.3-Specific settings.html","/en/ocr4all_userguide/4.Workflow/4.004.3-Specific%20settings","/en/ocr4all_userguide/4.Workflow/4.004.3-Specific settings.md","/en/ocr4all_userguide/4.Workflow/4.004.3-Specific%20settings.md"]],
  ["v-f772910e","/en/ocr4all_userguide/4.Workflow/4.004.4-Exemplary%20page%20segmentation.html","",["/en/ocr4all_userguide/4.Workflow/4.004.4-Exemplary page segmentation.html","/en/ocr4all_userguide/4.Workflow/4.004.4-Exemplary%20page%20segmentation","/en/ocr4all_userguide/4.Workflow/4.004.4-Exemplary page segmentation.md","/en/ocr4all_userguide/4.Workflow/4.004.4-Exemplary%20page%20segmentation.md"]],
  ["v-7fbe135c","/en/ocr4all_userguide/4.Workflow/4.004.5-Additional%20processing%20options.html","",["/en/ocr4all_userguide/4.Workflow/4.004.5-Additional processing options.html","/en/ocr4all_userguide/4.Workflow/4.004.5-Additional%20processing%20options","/en/ocr4all_userguide/4.Workflow/4.004.5-Additional processing options.md","/en/ocr4all_userguide/4.Workflow/4.004.5-Additional%20processing%20options.md"]],
  ["v-2f02337b","/en/ocr4all_userguide/4.Workflow/4.004.6-Final%20steps%20with%20LAREX.html","",["/en/ocr4all_userguide/4.Workflow/4.004.6-Final steps with LAREX.html","/en/ocr4all_userguide/4.Workflow/4.004.6-Final%20steps%20with%20LAREX","/en/ocr4all_userguide/4.Workflow/4.004.6-Final steps with LAREX.md","/en/ocr4all_userguide/4.Workflow/4.004.6-Final%20steps%20with%20LAREX.md"]],
  ["v-4fa8dd5e","/en/ocr4all_userguide/4.Workflow/4.005-Line%20Segmentation.html","",["/en/ocr4all_userguide/4.Workflow/4.005-Line Segmentation.html","/en/ocr4all_userguide/4.Workflow/4.005-Line%20Segmentation","/en/ocr4all_userguide/4.Workflow/4.005-Line Segmentation.md","/en/ocr4all_userguide/4.Workflow/4.005-Line%20Segmentation.md"]],
  ["v-7dc44e6a","/en/ocr4all_userguide/4.Workflow/4.006-Recognition.html","",["/en/ocr4all_userguide/4.Workflow/4.006-Recognition","/en/ocr4all_userguide/4.Workflow/4.006-Recognition.md"]],
  ["v-929cf242","/en/ocr4all_userguide/4.Workflow/4.007-Ground-Truth-Production.html","",["/en/ocr4all_userguide/4.Workflow/4.007-Ground-Truth-Production","/en/ocr4all_userguide/4.Workflow/4.007-Ground-Truth-Production.md"]],
  ["v-2fb9cb37","/en/ocr4all_userguide/4.Workflow/4.008-Evaluation.html","",["/en/ocr4all_userguide/4.Workflow/4.008-Evaluation","/en/ocr4all_userguide/4.Workflow/4.008-Evaluation.md"]],
  ["v-1b3075cc","/en/ocr4all_userguide/4.Workflow/4.009-Training.html","",["/en/ocr4all_userguide/4.Workflow/4.009-Training","/en/ocr4all_userguide/4.Workflow/4.009-Training.md"]],
  ["v-a5b56a2a","/en/ocr4all_userguide/4.Workflow/4.010-Post_Correction.html","",["/en/ocr4all_userguide/4.Workflow/4.010-Post_Correction","/en/ocr4all_userguide/4.Workflow/4.010-Post_Correction.md"]],
  ["v-0d1b8a0d","/en/ocr4all_userguide/4.Workflow/4.011-Result_Generation.html","",["/en/ocr4all_userguide/4.Workflow/4.011-Result_Generation","/en/ocr4all_userguide/4.Workflow/4.011-Result_Generation.md"]],
  ["v-93aa5272","/en/ocr4all_userguide/5.Errors/5-Errors-Problems.html","5. Errors, frequent problems and how to avoid them",["/en/ocr4all_userguide/5.Errors/5-Errors-Problems","/en/ocr4all_userguide/5.Errors/5-Errors-Problems.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
