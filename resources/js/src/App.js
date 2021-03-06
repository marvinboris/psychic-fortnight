import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import asyncComponent from './hoc/asyncComponent/asyncComponent';

import AuthUser from './containers/Auth/User/Layout';
import AuthAdmin from './containers/Auth/Admin/Layout';
import Frontend from './containers/Frontend/Layout';
import Backend from './containers/Backend/Layout';
import BackendUserRestaurantsEdit from './containers/Backend/User/Restaurants/Edit/Layout';

import Spinner from './components/UI/Spinner';

import * as actions from './store/actions';

import 'aos/dist/aos.css';

// User routes
const asyncUserCmsGlobal = asyncComponent(() => import('./containers/Backend/User/Cms/Global'));
const asyncUserCmsGeneral = asyncComponent(() => import('./containers/Backend/User/Cms/General'));
const asyncUserCmsMessages = asyncComponent(() => import('./containers/Backend/User/Cms/Messages'));
const asyncUserCmsComponents = asyncComponent(() => import('./containers/Backend/User/Cms/Components'));
const asyncUserCmsAuth = asyncComponent(() => import('./containers/Backend/User/Cms/Auth'));
const asyncUserCmsBackend = asyncComponent(() => import('./containers/Backend/User/Cms/Backend'));
const asyncUserCmsFrontend = asyncComponent(() => import('./containers/Backend/User/Cms/Frontend'));


const asyncUserDashboard = asyncComponent(() => import('./containers/Backend/User/Dashboard/Dashboard'));


const asyncUserFeatures = asyncComponent(() => import('./containers/Backend/User/Features'));
const asyncUserFeaturesAdd = asyncComponent(() => import('./containers/Backend/User/Features/Add'));
const asyncUserFeaturesEdit = asyncComponent(() => import('./containers/Backend/User/Features/Edit'));


const asyncUserLanguages = asyncComponent(() => import('./containers/Backend/User/Languages'));
const asyncUserLanguagesAdd = asyncComponent(() => import('./containers/Backend/User/Languages/Add'));
const asyncUserLanguagesEdit = asyncComponent(() => import('./containers/Backend/User/Languages/Edit'));


const asyncUserRoles = asyncComponent(() => import('./containers/Backend/User/Roles'));
const asyncUserRolesAdd = asyncComponent(() => import('./containers/Backend/User/Roles/Add'));
const asyncUserRolesEdit = asyncComponent(() => import('./containers/Backend/User/Roles/Edit'));


const asyncUserSettingsLanguage = asyncComponent(() => import('./containers/Backend/User/Settings/Language'));


const asyncUserUsers = asyncComponent(() => import('./containers/Backend/User/Users'));
const asyncUserUsersAdd = asyncComponent(() => import('./containers/Backend/User/Users/Add'));
const asyncUserUsersEdit = asyncComponent(() => import('./containers/Backend/User/Users/Edit'));


const asyncUserMethods = asyncComponent(() => import('./containers/Backend/User/Methods'));
const asyncUserMethodsAdd = asyncComponent(() => import('./containers/Backend/User/Methods/Add'));
const asyncUserMethodsEdit = asyncComponent(() => import('./containers/Backend/User/Methods/Edit'));


const asyncUserRecharges = asyncComponent(() => import('./containers/Backend/User/Recharges'));
const asyncUserRechargesAdd = asyncComponent(() => import('./containers/Backend/User/Recharges/Add'));


const asyncUserPlans = asyncComponent(() => import('./containers/Backend/User/Plans'));
const asyncUserPlansAdd = asyncComponent(() => import('./containers/Backend/User/Plans/Add'));
const asyncUserPlansBought = asyncComponent(() => import('./containers/Backend/User/Plans/Bought'));


const asyncUserRestaurants = asyncComponent(() => import('./containers/Backend/User/Restaurants'));
const asyncUserRestaurantsAdd = asyncComponent(() => import('./containers/Backend/User/Restaurants/Add'));
const asyncUserRestaurantsEditCategories = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Categories'));
const asyncUserRestaurantsEditCategoriesAdd = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Categories/Add'));
const asyncUserRestaurantsEditCategoriesEdit = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Categories/Edit'));

const asyncUserRestaurantsEditMeals = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Meals'));
const asyncUserRestaurantsEditMealsAdd = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Meals/Add'));
const asyncUserRestaurantsEditMealsEdit = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Meals/Edit'));

const asyncUserRestaurantsEditAddons = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Addons'));
const asyncUserRestaurantsEditAddonsAdd = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Addons/Add'));
const asyncUserRestaurantsEditAddonsEdit = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Addons/Edit'));

const asyncUserRestaurantsEditComments = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Comments'));

const asyncUserRestaurantsEditPlans = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Plans'));
const asyncUserRestaurantsEditPlansPurchase = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Plans/Purchase'));

const asyncUserRestaurantsEditRecharges = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Recharges'));

const asyncUserRestaurantsEditSettings = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Settings'));

const asyncUserRestaurantsEditDashboard = asyncComponent(() => import('./containers/Backend/User/Restaurants/Edit/Dashboard/Dashboard'));

// Admin routes
const asyncAdminAdmins = asyncComponent(() => import('./containers/Backend/Admin/Admins'));
const asyncAdminAdminsAdd = asyncComponent(() => import('./containers/Backend/Admin/Admins/Add'));
const asyncAdminAdminsEdit = asyncComponent(() => import('./containers/Backend/Admin/Admins/Edit'));


const asyncAdminCmsGlobal = asyncComponent(() => import('./containers/Backend/Admin/Cms/Global'));
const asyncAdminCmsGeneral = asyncComponent(() => import('./containers/Backend/Admin/Cms/General'));
const asyncAdminCmsMessages = asyncComponent(() => import('./containers/Backend/Admin/Cms/Messages'));
const asyncAdminCmsComponents = asyncComponent(() => import('./containers/Backend/Admin/Cms/Components'));
const asyncAdminCmsAuth = asyncComponent(() => import('./containers/Backend/Admin/Cms/Auth'));
const asyncAdminCmsBackend = asyncComponent(() => import('./containers/Backend/Admin/Cms/Backend'));


const asyncAdminDashboard = asyncComponent(() => import('./containers/Backend/Admin/Dashboard/Dashboard'));


const asyncAdminFeatures = asyncComponent(() => import('./containers/Backend/Admin/Features'));
const asyncAdminFeaturesAdd = asyncComponent(() => import('./containers/Backend/Admin/Features/Add'));
const asyncAdminFeaturesEdit = asyncComponent(() => import('./containers/Backend/Admin/Features/Edit'));


const asyncAdminLanguages = asyncComponent(() => import('./containers/Backend/Admin/Languages'));
const asyncAdminLanguagesAdd = asyncComponent(() => import('./containers/Backend/Admin/Languages/Add'));
const asyncAdminLanguagesEdit = asyncComponent(() => import('./containers/Backend/Admin/Languages/Edit'));


const asyncAdminRoles = asyncComponent(() => import('./containers/Backend/Admin/Roles'));
const asyncAdminRolesAdd = asyncComponent(() => import('./containers/Backend/Admin/Roles/Add'));
const asyncAdminRolesEdit = asyncComponent(() => import('./containers/Backend/Admin/Roles/Edit'));


const asyncAdminSettingsLanguage = asyncComponent(() => import('./containers/Backend/Admin/Settings/Language'));


const asyncAdminUsers = asyncComponent(() => import('./containers/Backend/Admin/Users'));
const asyncAdminUsersAdd = asyncComponent(() => import('./containers/Backend/Admin/Users/Add'));
const asyncAdminUsersEdit = asyncComponent(() => import('./containers/Backend/Admin/Users/Edit'));


// Auth routes
const asyncUserLogin = asyncComponent(() => import('./containers/Auth/User/Login/Login'));


const asyncAdminLogin = asyncComponent(() => import('./containers/Auth/Admin/Login/Login'));
const asyncAdminVerify = asyncComponent(() => import('./containers/Auth/Admin/Verify/Verify'));


// Frontend routes
const asyncAboutOrganization = asyncComponent(() => import('./containers/Frontend/About/Organization'));
const asyncAboutMedia = asyncComponent(() => import('./containers/Frontend/About/Media'));
const asyncAboutManagement = asyncComponent(() => import('./containers/Frontend/About/Management'));
const asyncAboutDownloads = asyncComponent(() => import('./containers/Frontend/About/Downloads'));
const asyncAboutJobs = asyncComponent(() => import('./containers/Frontend/About/Jobs'));
const asyncAboutUniforms = asyncComponent(() => import('./containers/Frontend/About/Uniforms'));
const asyncAboutActions = asyncComponent(() => import('./containers/Frontend/About/Actions'));
const asyncAboutMissions = asyncComponent(() => import('./containers/Frontend/About/Missions'));
const asyncAboutGenesis = asyncComponent(() => import('./containers/Frontend/About/Genesis'));

const asyncContact = asyncComponent(() => import('./containers/Frontend/Contact'));
const asyncPostsShow = asyncComponent(() => import('./containers/Frontend/Posts/Show'));
const asyncPosts = asyncComponent(() => import('./containers/Frontend/Posts'));
const asyncExams = asyncComponent(() => import('./containers/Frontend/Exams'));
const asyncServicesPassport = asyncComponent(() => import('./containers/Frontend/Services/Passport'));
const asyncServicesTitles = asyncComponent(() => import('./containers/Frontend/Services/Titles'));
const asyncServices = asyncComponent(() => import('./containers/Frontend/Services'));
const asyncHome = asyncComponent(() => import('./containers/Frontend/Home'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup, onGetContent } = this.props;
        onTryAuthSignup();
        onGetContent();
        init();
    }

    render() {
        const { content: { cms, currencies, countries }, auth: { role } } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        let routes = (
            <Switch>
                <Route path="/auth/admin">
                    <AuthAdmin>
                        <Switch>
                            <Route path="/auth/admin/verify" component={asyncAdminVerify} />
                            <Route path="/auth/admin/login" component={asyncAdminLogin} />
                        </Switch>
                    </AuthAdmin>
                </Route>
                <Redirect path="/admin" to="/auth/admin/login" />

                <Route path="/auth/user">
                    <AuthUser>
                        <Switch>
                            <Route path="/auth/user/login" component={asyncUserLogin} />
                        </Switch>
                    </AuthUser>
                </Route>
                <Redirect path="/user" to="/auth/user/login" />
                <Redirect path="/auth" to="/auth/user/login" />

                <Route path="/">
                    <Frontend>
                        <Switch>
                            <Route path="/about">
                                <Switch>
                                    <Route path="/about/organization" component={asyncAboutOrganization} />
                                    <Route path="/about/media" component={asyncAboutMedia} />
                                    <Route path="/about/management" component={asyncAboutManagement} />
                                    <Route path="/about/downloads" component={asyncAboutDownloads} />
                                    <Route path="/about/jobs" component={asyncAboutJobs} />
                                    <Route path="/about/uniforms" component={asyncAboutUniforms} />
                                    <Route path="/about/actions" component={asyncAboutActions} />
                                    <Route path="/about/missions" component={asyncAboutMissions} />
                                    <Route path="/about/genesis" component={asyncAboutGenesis} />
                                </Switch>
                            </Route>

                            <Route path="/contact" component={asyncContact} />
                            <Route path="/posts/:slug" component={asyncPostsShow} />
                            <Route path="/posts" component={asyncPosts} />
                            <Route path="/exams" component={asyncExams} />
                            <Route path="/services/passport" component={asyncServicesPassport} />
                            <Route path="/services/titles" component={asyncServicesTitles} />
                            <Route path="/services" component={asyncServices} />
                            <Route path="/" component={asyncHome} />
                        </Switch>
                    </Frontend>
                </Route>
            </Switch>
        );

        if (isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/user">
                        <Switch>
                            <Route path="/user/restaurants/:restaurant/edit">
                                <BackendUserRestaurantsEdit>
                                    <Switch>
                                        <Route path="/user/restaurants/:restaurant/edit/categories/:id/edit" component={asyncUserRestaurantsEditCategoriesEdit} />
                                        <Route path="/user/restaurants/:restaurant/edit/categories/add" component={asyncUserRestaurantsEditCategoriesAdd} />
                                        <Route path="/user/restaurants/:restaurant/edit/categories" component={asyncUserRestaurantsEditCategories} />

                                        <Route path="/user/restaurants/:restaurant/edit/meals/:id/edit" component={asyncUserRestaurantsEditMealsEdit} />
                                        <Route path="/user/restaurants/:restaurant/edit/meals/add" component={asyncUserRestaurantsEditMealsAdd} />
                                        <Route path="/user/restaurants/:restaurant/edit/meals" component={asyncUserRestaurantsEditMeals} />

                                        <Route path="/user/restaurants/:restaurant/edit/addons/:id/edit" component={asyncUserRestaurantsEditAddonsEdit} />
                                        <Route path="/user/restaurants/:restaurant/edit/addons/add" component={asyncUserRestaurantsEditAddonsAdd} />
                                        <Route path="/user/restaurants/:restaurant/edit/addons" component={asyncUserRestaurantsEditAddons} />

                                        <Route path="/user/restaurants/:restaurant/edit/settings" component={asyncUserRestaurantsEditSettings} />

                                        <Route path="/user/restaurants/:restaurant/edit/comments" component={asyncUserRestaurantsEditComments} />

                                        <Route path="/user/restaurants/:restaurant/edit/plans/purchase" component={asyncUserRestaurantsEditPlansPurchase} />
                                        <Route path="/user/restaurants/:restaurant/edit/plans" component={asyncUserRestaurantsEditPlans} />

                                        <Route path="/user/restaurants/:restaurant/edit/recharges" component={asyncUserRestaurantsEditRecharges} />

                                        <Route path="/user/restaurants/:restaurant/edit/dashboard" component={asyncUserRestaurantsEditDashboard} />
                                    </Switch>
                                </BackendUserRestaurantsEdit>
                            </Route>

                            <Route path="/user">
                                <Backend>
                                    <Switch>
                                        <Route path="/user/cms/global" component={asyncUserCmsGlobal} />
                                        <Route path="/user/cms/general" component={asyncUserCmsGeneral} />
                                        <Route path="/user/cms/messages" component={asyncUserCmsMessages} />
                                        <Route path="/user/cms/components" component={asyncUserCmsComponents} />
                                        <Route path="/user/cms/auth" component={asyncUserCmsAuth} />
                                        <Route path="/user/cms/backend" component={asyncUserCmsBackend} />
                                        <Route path="/user/cms/frontend" component={asyncUserCmsFrontend} />

                                        <Route path="/user/dashboard" component={asyncUserDashboard} />

                                        <Route path="/user/features/:id/edit" component={asyncUserFeaturesEdit} />
                                        <Route path="/user/features/add" component={asyncUserFeaturesAdd} />
                                        <Route path="/user/features" component={asyncUserFeatures} />

                                        <Route path="/user/languages/:id/edit" component={asyncUserLanguagesEdit} />
                                        <Route path="/user/languages/add" component={asyncUserLanguagesAdd} />
                                        <Route path="/user/languages" component={asyncUserLanguages} />

                                        <Route path="/user/roles/:id/edit" component={asyncUserRolesEdit} />
                                        <Route path="/user/roles/add" component={asyncUserRolesAdd} />
                                        <Route path="/user/roles" component={asyncUserRoles} />

                                        <Route path="/user/settings/language" component={asyncUserSettingsLanguage} />

                                        <Route path="/user/users/:id/edit" component={asyncUserUsersEdit} />
                                        <Route path="/user/users/add" component={asyncUserUsersAdd} />
                                        <Route path="/user/users" component={asyncUserUsers} />

                                        <Route path="/user/methods/:id/edit" component={asyncUserMethodsEdit} />
                                        <Route path="/user/methods/add" component={asyncUserMethodsAdd} />
                                        <Route path="/user/methods" component={asyncUserMethods} />

                                        <Route path="/user/recharges/add" component={asyncUserRechargesAdd} />
                                        <Route path="/user/recharges" component={asyncUserRecharges} />

                                        <Route path="/user/plans/bought" component={asyncUserPlansBought} />
                                        <Route path="/user/plans/add" component={asyncUserPlansAdd} />
                                        <Route path="/user/plans" component={asyncUserPlans} />


                                        <Route path="/user/restaurants/add" component={asyncUserRestaurantsAdd} />
                                        <Route path="/user/restaurants" exact component={asyncUserRestaurants} />
                                    </Switch>
                                </Backend>
                            </Route>
                        </Switch>
                    </Route>



                    <Route path="/admin">
                        <Backend>
                            <Switch>
                                <Route path="/admin/admins/:id/edit" component={asyncAdminAdminsEdit} />
                                <Route path="/admin/admins/add" component={asyncAdminAdminsAdd} />
                                <Route path="/admin/admins" component={asyncAdminAdmins} />

                                <Route path="/admin/cms/global" component={asyncAdminCmsGlobal} />
                                <Route path="/admin/cms/general" component={asyncAdminCmsGeneral} />
                                <Route path="/admin/cms/messages" component={asyncAdminCmsMessages} />
                                <Route path="/admin/cms/components" component={asyncAdminCmsComponents} />
                                <Route path="/admin/cms/auth" component={asyncAdminCmsAuth} />
                                <Route path="/admin/cms/backend" component={asyncAdminCmsBackend} />

                                <Route path="/admin/dashboard" component={asyncAdminDashboard} />

                                <Route path="/admin/features/:id/edit" component={asyncAdminFeaturesEdit} />
                                <Route path="/admin/features/add" component={asyncAdminFeaturesAdd} />
                                <Route path="/admin/features" component={asyncAdminFeatures} />

                                <Route path="/admin/languages/:id/edit" component={asyncAdminLanguagesEdit} />
                                <Route path="/admin/languages/add" component={asyncAdminLanguagesAdd} />
                                <Route path="/admin/languages" component={asyncAdminLanguages} />

                                <Route path="/admin/roles/:id/edit" component={asyncAdminRolesEdit} />
                                <Route path="/admin/roles/add" component={asyncAdminRolesAdd} />
                                <Route path="/admin/roles" component={asyncAdminRoles} />

                                <Route path="/admin/settings/language" component={asyncAdminSettingsLanguage} />

                                <Route path="/admin/users/:id/edit" component={asyncAdminUsersEdit} />
                                <Route path="/admin/users/add" component={asyncAdminUsersAdd} />
                                <Route path="/admin/users" component={asyncAdminUsers} />
                            </Switch>
                        </Backend>
                    </Route>

                    <Redirect path="/dashboard" to={`/${role}/dashboard`} />
                    <Redirect path="/auth" to={`/${role}/dashboard`} />

                    <Route path="/">
                        <Frontend>
                            <Switch>
                                <Route path="/" component={asyncHome} />
                            </Switch>
                        </Frontend>
                    </Route>
                </Switch>
            );
        }

        const dataReady = cms !== undefined && currencies !== undefined && countries !== undefined && ((isAuthenticated && role !== undefined) || !isAuthenticated);

        return dataReady ? routes : <Spinner />;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(actions.authCheckState()),
    onGetContent: () => dispatch(actions.getContent()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
