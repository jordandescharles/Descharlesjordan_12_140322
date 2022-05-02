import CallApi from './CallApi';

export default async function GetDatas(userId,source) {

  try {
    const UserData = await new CallApi().getUserInfo(userId,source)
    const UserActivity = await new CallApi().getUserActivity(userId,source)
    const UserSession = await new CallApi().getUserSession(userId,source)
    const UserPerformance= await new CallApi().getUserPerformance(userId,source)

    const data = {
      userData: UserData,
      userActivity: UserActivity,
      userSession : UserSession,
      userPerformance : UserPerformance
    };

    return [null, data]

  } catch (err) {
    
    return [err];
    
  }

}
