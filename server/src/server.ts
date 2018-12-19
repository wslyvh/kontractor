import app from "./app";
import appConfig from "./config/appConfig";

app.listen(appConfig.PORT, () => {
    console.log("Express server listening on port " + appConfig.PORT);
});
