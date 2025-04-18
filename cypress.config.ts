import { defineConfig } from "cypress";
import webpackPreprocessor from "@cypress/webpack-preprocessor";
import * as webpack from "webpack";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: {
          resolve: {
            extensions: [".ts", ".js"],
          },
          module: {
            rules: [
              {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                  loader: "ts-loader",
                  options: {
                    transpileOnly: true,
                  },
                },
              },
            ],
          },
        } as webpack.Configuration,
      };

      on("file:preprocessor", webpackPreprocessor(options));
      return config;
    },
  },
});
