import Realm from 'realm';
import {createRealmContext} from '@realm/react'

class BMath extends Realm.Object {
    static schema = {
      name:'BMath',
      properties:{
        id:'string',
        startTime:'date',
        endTime:'date',
        className: 'string',
        classDescription: 'string',
        classStatus: 'string',
        classDeeplink: 'string',
        postClassActivities:'PostClassActivities'
      },
    };
  }
  class PostClassActivities extends Realm.Object{
    static schema = {
        activitDeeplink: 'string',
          quiz: 'Quiz'
    };
  }
  clas
  class Quiz extends Realm.Object{
    static schema = {
        tenantId: 'string',
        quizApiUrl: 'url',
        quizSlug: 'string',
        clientId: 'string',
        data: 'Data[]'
    };
  }
  class Data extends Realm.Object{
    static schema = {
        quizId: 'string',
        name: 'string',
        attemptNo: 'number',
        isQuizSdk: 'boolean',
        status: 'string',
        dueDate: 'date',
    }
  }
  const config = {
    schema: [BMath],
  };
  
  const {RealmProvider} = createRealmContext(config);
  