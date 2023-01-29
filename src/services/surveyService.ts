import { SurveyStatus } from "../interfaces/survey/surveyEnums"

const convertDBBoolToStatus = (isActive: boolean) => {
  if (isActive) { 
    return SurveyStatus.SURVEY_IN_PROG
  } else { 
    return SurveyStatus.SURVEY_COMPLETE
  }
}

const generateSurveyChatLog = (q: Array<any>, r: Array<any>) => {
  // https://www.tutorialstonight.com/javascript-sort-an-array-of-objects#:~:text=Javascript%20Sort%20Array%20Of%20Objects%20By%20Property%201,3.%20Javascript%20sort%20array%20of%20objects%20by%20date
}

export {
  convertDBBoolToStatus
}