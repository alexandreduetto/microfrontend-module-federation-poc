declare module "remote_app_1/ExampleComponent" {
  const ExampleComponent: React.FC<{
    headerText: string;
    buttonText: string;
    onClick?: () => void;
  }>;
  export default ExampleComponent;
}
