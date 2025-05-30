/*instrumentation.js*/
// Require dependencies
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-node');
const {
    getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const {
    PeriodicExportingMetricReader,
    ConsoleMetricExporter,
} = require('@opentelemetry/sdk-metrics');
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin');

const sdk = new NodeSDK({
    traceExporter: new ZipkinExporter({
        serviceName: "otel"
    }),
    metricReader: new PeriodicExportingMetricReader({
        exporter: new ZipkinExporter({
            serviceName: "otel"
        }),
    }),
    instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
