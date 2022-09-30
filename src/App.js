import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  Checkbox,
  FormLayout,
  Heading,
  Layout,
  Modal,
  Page,
  RadioButton,
  TextContainer,
  TextField,
} from "@shopify/polaris";
import { useCallback, useReducer, useState } from "react";

function App() {
  const initialState = {
    title: "",
    description: "",
    handlingTime: "",
    amazonSku: "",
    barcodeExemption: false,
    amazonCategory: "",
    imageCriteria: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        console.log(state);
        let tempState = state;
        tempState[action.field] = action.payload;
        return { ...tempState };

      default:
        throw new Error();
    }
  }

  const changeHandler = (event, field) => {
    dispatch({
      type: "ADD",
      field: field,
      payload: event,
    });
  };
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <Page fullWidth breadcrumbs={[{}]}>
        <Layout>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Title *"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  onChange={(e) => {
                    changeHandler(e, "title");
                  }}
                  autoComplete="off"
                  value={state.title}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Description "
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  onChange={(e) => {
                    changeHandler(e, "description");
                  }}
                  autoComplete="off"
                  value={state.description}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Handling Time *"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  onChange={(e) => {
                    changeHandler(e, "handlingTime");
                  }}
                  autoComplete="off"
                  value={state.handlingTime}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Amazon Parent SKU "
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  onChange={(e) => {
                    changeHandler(e, "amazonSku");
                  }}
                  autoComplete="off"
                  value={state.amazonSku}
                  type="number"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Barcode/GTIN Exemptions"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <Checkbox
                  label="Barcode/GTIN Exemption "
                  checked={state.barcodeExemption}
                  onChange={(e) => changeHandler(e, "barcodeExemption")}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Add Amazon Category"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  onChange={(e) => {
                    changeHandler(e, "amazonCategory");
                  }}
                  autoComplete="off"
                  value={state.amazonCategory}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Image Selection "
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <RadioButton
                  label="Set Product images as shown on Shopify"
                  checked={state.imageCriteria === "Shopify"}
                  id="disabled"
                  name="accounts"
                  onChange={() => changeHandler("Shopify", "imageCriteria")}
                />
                <RadioButton
                  label="Set Custom amazon Images"
                  id="optional"
                  name="accounts"
                  checked={state.imageCriteria === "Custom"}
                  onChange={() => changeHandler("Custom", "imageCriteria")}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Button primary onClick={handleChange}>
            Submit
          </Button>
        </Layout>
      </Page>
      <Modal
        // activator={activator}
        open={active}
        onClose={handleChange}
        title="Your Details"
        secondaryActions={[
          {
            content: "Close",
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>Title : {state.title}</p>
            <p>Description : {state.description}</p>

            <p>Handling Time : {state.handlingTime}</p>

            <p>Amazon Parent SKU : {state.amazonSku}</p>

            <p>Amazon Category : {state.amazonCategory}</p>
            <p>BarCode Exemption : {state.barcodeExemption ? "Yes" : "No"}</p>
            <p>Image Choice : {state.imageCriteria }</p>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default App;
