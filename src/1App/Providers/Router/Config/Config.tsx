import React from "react";
import { RouteProps } from "react-router-dom";

import { Courses } from "../../../../2Pages/Courses";
import { Main } from "../../../../2Pages/Main";
import { News } from "../../../../2Pages/News";
import { Outsourcing } from "../../../../2Pages/Outsourcing";
import { PrivacyPolicy } from "../../../../2Pages/PrivacyPolicy";
import { Teacher } from "../../../../2Pages/Teacher";

enum AppRoutes {
    MAIN = "main",
    COURSES = "courses",
    TEACHER = "teacher",
    NEWS = "news",
    OUTSOURCING = "outsourcing",
    PRIVACYPOLICY = "privacyPolicy",

    NOT_FOUND = "not_found",
}

export type AppRouteProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "",
    [AppRoutes.COURSES]: "/courses/:id",
    [AppRoutes.TEACHER]: "/teacher/:id",
    [AppRoutes.NEWS]: "/reviews",
    [AppRoutes.OUTSOURCING]: "/outsourcing",
    [AppRoutes.PRIVACYPOLICY]: "/privacyPolicy",

    // last
    [AppRoutes.NOT_FOUND]: "*"
};


export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <Main/>
    }, [AppRoutes.COURSES]: {
        path: RoutePaths.courses,
        element: <Courses/>
    }, [AppRoutes.TEACHER]: {
        path: RoutePaths.teacher,
        element: <Teacher/>
    }, [AppRoutes.NEWS]: {
        path: RoutePaths.news,
        element: <News/>
    }, [AppRoutes.OUTSOURCING]: {
        path: RoutePaths.outsourcing,
        element: <Outsourcing/>
    }, [AppRoutes.PRIVACYPOLICY]: {
        path: RoutePaths.privacyPolicy,
        element: <PrivacyPolicy/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <div>Not Found</div>
    }
};