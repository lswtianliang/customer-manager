import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '@components/home/Index';
import Admin from '@components/admin/Index';
import PageNotFound from '@components/shared/PageNotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense fallback="Loading...">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route Path="*" component={PageNotFound} />
          </Switch>
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
