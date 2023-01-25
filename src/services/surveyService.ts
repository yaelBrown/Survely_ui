import { SurveyStatus } from "../interfaces/survey/surveyEnums"

const convertDBBoolToStatus = (isActive: boolean) => {
  if (isActive) { 
    return SurveyStatus.SURVEY_IN_PROG
  } else { 
    return SurveyStatus.SURVEY_COMPLETE
  }
}

export {
  convertDBBoolToStatus
}