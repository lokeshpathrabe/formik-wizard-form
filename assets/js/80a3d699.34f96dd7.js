"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[562],{7570:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:3},l="useFormikWizard",p={unversionedId:"introduction/use-formik-hook",id:"introduction/use-formik-hook",isDocsHomePage:!1,title:"useFormikWizard",description:"`javascript",source:"@site/docs/introduction/use-formik-hook.md",sourceDirName:"introduction",slug:"/introduction/use-formik-hook",permalink:"/docs/introduction/use-formik-hook",editUrl:"https://github.com/mjangir/formik-wizard-form/blob/master/website/docs/introduction/use-formik-hook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"FormikWizard",permalink:"/docs/introduction/formik-wizard-provider"},next:{title:"Bootstrap",permalink:"/docs/examples/bootstrap"}},d=[{value:"<code>steps: Step[]</code>",id:"steps-step",children:[]},{value:"<code>activeStepIndex: number</code>",id:"activestepindex-number",children:[]},{value:"<code>validateOnNext: boolean</code>",id:"validateonnext-boolean",children:[]},{value:"Hook Return Value",id:"hook-return-value",children:[]},{value:"Example",id:"example",children:[]}],u={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"useformikwizard"},"useFormikWizard"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useFormikWizard } from 'formik-wizard-form';\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useFormikWizard")," is a replacement of original ",(0,i.kt)("inlineCode",{parentName:"p"},"useFormik")," hook and accepts all the formik props along with ",(0,i.kt)("inlineCode",{parentName:"p"},"WizardProps")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface WizardProps extends FormikConfig<FormikValues> {\n  /** Default active step index for the wizard */\n  activeStepIndex: number;\n\n  /** Wizard steps array given below */\n  steps: Step[];\n\n  /** Must be a function or react element */\n  children?:\n    | ((props: RenderProps) => React.ReactNode)\n    | React.ReactElement<RenderProps>;\n\n  /** Should validate the form before moving to next step */\n  validateOnNext?: boolean;\n}\n\ntype Step = {\n  /** Validation schema object for the current step */\n  validationSchema?: any | (() => any);\n\n  /** Handler to be called before moving to previous step */\n  beforePrev?: (\n    values: FormikValues,\n    formikBag: FormikProps<FormikValues>,\n    currentStepIndex: number\n  ) => Promise<any>;\n\n  /** Handler to be called before moving to next step */\n  beforeNext?: (\n    values: FormikValues,\n    formikBag: FormikProps<FormikValues>,\n    currentStepIndex: number\n  ) => Promise<any>;\n\n  /** React functional or class component */\n  component: React.ComponentType<FormikProps<FormikValues>>;\n};\n")),(0,i.kt)("h3",{id:"steps-step"},(0,i.kt)("inlineCode",{parentName:"h3"},"steps: Step[]")),(0,i.kt)("p",null,"steps is an array of form step objects where each object contains the information about a particular step component. Each step object must satisfy the below typescript type."),(0,i.kt)("h3",{id:"activestepindex-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"activeStepIndex: number")),(0,i.kt)("p",null,"activeStepIndex is the index of step which you want to make active by default on form render. Starting from zero."),(0,i.kt)("h3",{id:"validateonnext-boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"validateOnNext: boolean")),(0,i.kt)("p",null,"validateOnNext is a boolean flag which controls whether to by pass the form validations or prevent moving backward/forward in case of invalid form."),(0,i.kt)("h2",{id:"hook-return-value"},"Hook Return Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useFormikWizard()")," returns an object of render props and method containing the below interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RenderProps extends FormikProps<FormikValues> {\n  /** Handler to be called on previous button click */\n  handlePrev: () => void;\n\n  /** Handler to be called on next button click */\n  handleNext: () => void;\n\n  /** Current step index in number */\n  currentStepIndex?: number;\n\n  /** Flag to indicate previous button should be disabled */\n  isPrevDisabled: boolean;\n\n  /** Flag to indicate next button should be disabled */\n  isNextDisabled: boolean;\n\n  /** Flag to indicate current step is first step */\n  isFirstStep: boolean;\n\n  /** Flag to indicate current step is last step */\n  isLastStep: boolean;\n\n  /** Current step component renderer */\n  renderComponent: () => React.ReactNode;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"handlePrev"),": should be provided to previous button onClick prop. It will take you to the previous step."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"handleNext"),": should be provided to next button onClick prop. It will take you to the next step."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"currentStepIndex"),": read-only property which returns the index of current step."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"isPrevDisabled"),": read only prop which returns Boolean value for whether previous button should be disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"isNextDisabled"),": read only prop which returns Boolean value for whether next button should be disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"isFirstStep"),": read only prop which returns boolean value for whether the current active step is the first step."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"isLastStep"),": read only prop which returns boolean value for whether the current active step is the last step."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"renderComponent"),": is the method which is responsible for rendering current step component.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const MultiStepForm = () => {\n  const {\n    renderComponent,\n    handlePrev,\n    handleNext,\n    isNextDisabled,\n    isPrevDisabled,\n    isLastStep,\n  } = useFormikWizard({\n    initialValues: { firstName: '', lastName: '' },\n    onSubmit: values => console.log(values),\n    validateOnNext: true,\n    activeStepIndex: 0,\n    steps: [\n      {\n        component: PersonalDetails,\n        validationSchema: Yup.object().shape({\n          firstName: Yup.string().required('First name is required'),\n        }),\n      },\n      {\n        component: ContactDetails,\n        validationSchema: Yup.object().shape({\n          email: Yup.string().required('Email is required'),\n        }),\n      },\n      {\n        component: JobDetails,\n        validationSchema: Yup.object().shape({\n          designation: Yup.string().required('Designation is required'),\n        }),\n      },\n    ],\n  });\n  return (\n    <div>\n      {renderComponent()}\n      <button type=\"button\" onClick={handlePrev} disabled={isPrevDisabled}>\n        Previous\n      </button>\n      <button type=\"button\" onClick={handleNext} disabled={isNextDisabled}>\n        {isLastStep ? 'Finish' : 'Next'}\n      </button>\n    </div>\n  );\n};\n")))}c.isMDXComponent=!0}}]);