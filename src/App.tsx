import { Observable, BehaviorSubject } from 'rxjs';

function rxtest() {
  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  console.log('just before subscribe');
  observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });
  console.log('just after subscribe');

  console.log('just before useSubscription');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //useSubscription(observable, {
  //      next(x) { console.log('got value ' + x); },
  //      error(err) { console.error('something wrong occurred: ' + err); },
  //      complete() { console.log('done'); }
  //  });
  console.log('just after useSubscription');
}

function rxtest2(){
  const subject = new BehaviorSubject(0); // 0 is the initial value

  subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
  });

  subject.next(1);
  subject.next(2);

  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
  });

  subject.next(3);
}

//npm run dev start test
function App() {
    return(
      <>
        <button onClick={rxtest}>test</button>
        <button onClick={rxtest2}>test2</button>
      </>
    );
}

export default App
